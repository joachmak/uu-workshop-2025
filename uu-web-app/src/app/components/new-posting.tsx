"use client"
import React, {useState} from "react";
import {useRouter} from "next/navigation";

export default function NewPosting() {
    const [form, setForm] = useState({
        imageUrl: '',
        title: '',
        description: '',
        price: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await fetch('/api/marketplace-posting', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                imageUrl: form.imageUrl,
                title: form.title,
                description: form.description,
                price: form.price,
            }),
        });
        if (!res.ok) {
            return;
        }
        router.push("/")
    };
    return (
        <div className="w-full">
            <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow flex flex-col gap-3 max-w-md mx-auto">
                <h2 className="text-xl font-semibold mb-2">Post a new Marketplace Ad</h2>
                <img
                    src={form.imageUrl === "" ?
                        "https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
                        : form.imageUrl
                    }
                    className={"w-[400px] mx-auto"}
                />
                <input
                    type="text"
                    placeholder={"Image"}
                    name="imageUrl"
                    value={form.imageUrl}
                    onChange={handleChange}
                    className="border rounded px-2 py-1 w-full outline-none"
                />
                <input
                    type="text"
                    name="title"
                    placeholder={"Title"}
                    value={form.title}
                    onChange={handleChange}
                    className="border rounded px-2 py-1 w-full outline-none"
                />
                <textarea
                    name="description"
                    placeholder={"Description"}
                    value={form.description}
                    onChange={handleChange}
                    className="border rounded px-2 py-1 w-full outline-none"
                />
                <input
                    type="number"
                    name="price"
                    placeholder="100kr"
                    value={form.price}
                    onChange={handleChange}
                    className="border rounded px-2 py-1 w-full outline-none"
                />
                <button className="bg-orange-600 text-white px-4 py-2 rounded">
                    ⚠️ Click
                </button>
            </form>
        </div>
    )
}