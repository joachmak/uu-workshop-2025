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
        <section className="w-full">
            <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow flex flex-col gap-3 max-w-md mx-auto">
                <h2 className="text-xl font-semibold mb-2">Post a new Marketplace Ad</h2>
                <img
                    src={form.imageUrl === "" ?
                        "https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
                        : form.imageUrl
                    }
                    alt={"Marketplace posting"}
                    className={"w-[400px] mx-auto"}
                />
                <label className={"w-full"}>
                    Image url
                    <br />
                    <input
                        type="text"
                        name="imageUrl"
                        placeholder="https://www.image-provider.com/image.jpg"
                        value={form.imageUrl}
                        onChange={handleChange}
                        className="border rounded px-2 py-1 w-full"
                        required
                    />
                </label>
                <label className={"w-full"}>
                    Title
                    <br />
                    <input
                        type="text"
                        name="title"
                        placeholder="Guitar"
                        value={form.title}
                        onChange={handleChange}
                        className="border rounded px-2 py-1 w-full"
                        required
                    />
                </label>
                <label className={"w-full"}>
                    Description
                    <br />
                    <textarea
                        name="description"
                        placeholder="My acoustic guitar..."
                        value={form.description}
                        onChange={handleChange}
                        className="border rounded px-2 py-1 w-full"
                        required
                    />
                </label>
                <label className={"w-full"}>
                    Price (NOK)
                    <br />
                    <input
                        type="number"
                        name="price"
                        placeholder="100kr"
                        value={form.price}
                        onChange={handleChange}
                        className="border rounded px-2 py-1 w-full"
                        required
                    />
                </label>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">+ Post Ad
                </button>
            </form>
        </section>
    )
}