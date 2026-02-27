import axiosInstance from "@/api/axiosInstance";

export interface BlogPost {
    id?: number | string;
    title: string;
    slug: string;
    content: string;
    excerpt: string;
    category: string;
    tags: string;
    status: string; // 'Published' | 'Draft'
    image_url?: string;
    video_url?: string;
    created_at?: string;
    author_name?: string;
}

const getHeaders = () => {
    const token = localStorage.getItem("access_token");
    return {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    };
};

export const blogService = {
    getAllBlogs: async (params?: any) => {
        try {
            const res = await axiosInstance.get('/api/blogs/', { params });
            return res.data;
        } catch (error) {
            console.error("Error fetching blogs", error);
            throw error;
        }
    },

    getBlogById: async (id: string | number) => {
        try {
            const res = await axiosInstance.get(`/api/blogs/${id}/`);
            return res.data;
        } catch (error) {
            console.error("Error fetching blog", error);
            throw error;
        }
    },

    getBlogBySlug: async (slug: string) => {
        try {
            const res = await axiosInstance.get(`/api/blogs/${slug}/`);
            return res.data;
        } catch (error) {
            console.error("Error fetching blog by slug", error);
            throw error;
        }
    },

    createBlog: async (data: any) => {
        try {
            const res = await axiosInstance.post('/api/blogs/', data, getHeaders());
            return res.data;
        } catch (error) {
            console.error("Error creating blog", error);
            throw error;
        }
    },

    updateBlog: async (id: string | number, data: any) => {
        try {
            const res = await axiosInstance.put(`/api/blogs/${id}/`, data, getHeaders());
            return res.data;
        } catch (error) {
            console.error("Error updating blog", error);
            throw error;
        }
    },

    deleteBlog: async (id: string | number) => {
        try {
            const res = await axiosInstance.delete(`/api/blogs/${id}/`, getHeaders());
            return res.data;
        } catch (error) {
            console.error("Error deleting blog", error);
            throw error;
        }
    }
};
