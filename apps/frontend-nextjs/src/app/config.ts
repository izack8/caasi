

export const techCategories = {
    dev: {
        name: 'Dev',
        items: [
            {
                name: "Python",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            },
            {
                name: "Java",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
            },
            {
                name: "JavaScript",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            },
            {
                name: "TypeScript",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            },
            {
                name: "Next.js",
                icon: "https://simpleicons.org/icons/nextdotjs.svg"
            },
            {
                name: "FastAPI",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg"
            },
            {
                name: "Spring Boot",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
            },
            {
                name: "React",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            },
            {
                name: "Streamlit",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg"
            },
        ]
    },
    ml: {
        name: 'AI & ML',
        items: [
            {
                name: "PyTorch",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg"
            },
            {
                name: "TensorFlow",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"
            },
            {
                name: "Pandas",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg"
            },
            {
                name: "NumPy",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"
            },
            {
                name: "scikit-learn",
                icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg"
            },
            {
                name: "LangChain",
                icon: "/icons/langchain-color.svg"
            },
            {
                name: "Hugging Face",
                icon: "/icons/hf-logo.svg"
            },
        ]
    },
    cloud: {
        name: 'Cloud & DevOps',
        items: [
            {
                name: "Docker",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
            },
            {
                name: "Git",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
            },
            {
                name: "Linux",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
            },
            {
                name: "Azure",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"
            },
        
        ]
    },
    database: {
        name: 'Databases',
        items: [
            {
                name: "MongoDB",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
            },
            {
                name: "MySQL",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
            },
            {
                name: "ChromaDB",
                icon: "/icons/chromadb_logo.svg"
            }
        ]
    }
};

const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? "https://caasi-production.up.railway.app/api"
  : "http://127.0.0.1:8000/api";

export const API_ENDPOINTS = {
    projects: `${API_BASE_URL}/projects`,
    project: (slug: string) => `${API_BASE_URL}/projects/${slug}`,
    experiences: `${API_BASE_URL}/experiences`,
    posts: `${API_BASE_URL}/posts`,
    post: (id: string) => `${API_BASE_URL}/posts/${id}`,
};