'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

type ActionResult = {
  error?: string
  success?: boolean
}

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

// CREATE POST
export async function createPost(formData: FormData): Promise<ActionResult> {
  const supabase = await createClient()
  
  const { data: { user }, error: userError } = await supabase.auth.getUser()
  
  if (userError || !user) {
    return { error: 'Unauthorized: Please login first' }
  }

  const title = formData.get('title') as string
  let slug = formData.get('slug') as string
  const content = formData.get('content') as string
  const excerpt = formData.get('excerpt') as string
  const cover_image = formData.get('cover_image') as string
  const published = formData.get('published') === 'true'

  if (!title || !content) {
    return { error: 'Title and content are required' }
  }

  if (!slug) {
    slug = generateSlug(title)
  }

  const { data: existingPost } = await supabase
    .from('posts')
    .select('slug')
    .eq('slug', slug)
    .single()

  if (existingPost) {
    return { error: 'Slug already exists. Please use a different title or slug.' }
  }

  const { error } = await supabase
    .from('posts')
    .insert({
      title,
      slug,
      content,
      excerpt,
      cover_image,
      published,
      user_id: user.id,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })

  if (error) {
    return { error: `Failed to create post: ${error.message}` }
  }

  revalidatePath('/blog')
  revalidatePath('/admin')
  
  return { success: true }
}

// UPDATE POST
export async function updatePost(postId: number, formData: FormData): Promise<ActionResult> {
  const supabase = await createClient()
  
  const { data: { user }, error: userError } = await supabase.auth.getUser()
  
  if (userError || !user) {
    return { error: 'Unauthorized: Please login first' }
  }

  const title = formData.get('title') as string
  let slug = formData.get('slug') as string
  const content = formData.get('content') as string
  const excerpt = formData.get('excerpt') as string
  const cover_image = formData.get('cover_image') as string
  const published = formData.get('published') === 'true'

  if (!title || !content) {
    return { error: 'Title and content are required' }
  }

  if (!slug) {
    slug = generateSlug(title)
  }

  // Check if slug already exists (excluding current post)
  const { data: existingPost } = await supabase
    .from('posts')
    .select('slug')
    .eq('slug', slug)
    .neq('id', postId)
    .single()

  if (existingPost) {
    return { error: 'Slug already exists. Please use a different title or slug.' }
  }

  const { error } = await supabase
    .from('posts')
    .update({
      title,
      slug,
      content,
      excerpt,
      cover_image,
      published,
      updated_at: new Date().toISOString(),
    })
    .eq('id', postId)
    .eq('user_id', user.id)

  if (error) {
    return { error: `Failed to update post: ${error.message}` }
  }

  revalidatePath('/blog')
  revalidatePath(`/blog/${slug}`)
  revalidatePath('/admin')
  
  return { success: true }
}

// DELETE POST
export async function deletePost(postId: number): Promise<ActionResult> {
  const supabase = await createClient()
  
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    return { error: 'Unauthorized' }
  }

  const { error } = await supabase
    .from('posts')
    .delete()
    .eq('id', postId)
    .eq('user_id', user.id)

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/blog')
  revalidatePath('/admin')
  
  return { success: true }
}

// GET SINGLE POST (for public)
export async function getPostBySlug(slug: string): Promise<{ error?: string; post?: any }> {
  const supabase = await createClient()
  
  const { data: post, error } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single()

  if (error) {
    return { error: error.message }
  }

  return { post }
}

// GET SINGLE POST BY ID (for admin edit)
export async function getPostById(postId: number): Promise<{ error?: string; post?: any }> {
  const supabase = await createClient()
  
  const { data: post, error } = await supabase
    .from('posts')
    .select('*')
    .eq('id', postId)
    .single()

  if (error) {
    return { error: error.message }
  }

  return { post }
}

// GET ALL PUBLISHED POSTS (for public blog)
export async function getAllPublishedPosts(): Promise<{ error?: string; posts?: any[] }> {
  const supabase = await createClient()
  
  const { data: posts, error } = await supabase
    .from('posts')
    .select('*')
    .eq('published', true)
    .order('created_at', { ascending: false })

  if (error) {
    return { error: error.message }
  }

  return { posts }
}

// GET ALL POSTS FOR ADMIN (only user's own posts)
export async function getAdminPosts(): Promise<{ error?: string; posts?: any[] }> {
  const supabase = await createClient()
  
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    return { error: 'Unauthorized' }
  }

  const { data: posts, error } = await supabase
    .from('posts')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })

  if (error) {
    return { error: error.message }
  }

  return { posts }
}