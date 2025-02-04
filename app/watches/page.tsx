import Image from "next/image";

export default function Watches() {
    const watchData = [
        { id: 1, name: "Rolex", price: 10000, describe: "Luxury Swiss watch", image: "/watch.avif" },
        { id: 2, name: "Omega", price: 8000, describe: "Classic and elegant timepiece", image: "/watch1.jpg" },
        { id: 3, name: "Tag Heuer", price: 5000, describe: "High-performance sports watch", image: "/watch2.jpeg" },
        { id: 4, name: "Patek Philippe", price: 25000, describe: "Exclusive handcrafted masterpiece", image: "/watch3.jpg" },
        { id: 5, name: "Audemars Piguet", price: 30000, describe: "Prestigious luxury watch", image: "/watch4.jpeg" },
        { id: 6, name: "Casio G-Shock", price: 200, describe: "Durable and shock-resistant", image: "/watch5.jpg" },
        { id: 7, name: "Seiko", price: 500, describe: "Affordable yet high-quality", image: "/watch6.png" },
        { id: 8, name: "Tissot", price: 700, describe: "Swiss precision at a great value", image: "/watch7.jpg" }
    ];

    return (
        <div className="container">
            <h1 className="title">Luxury Watches Collection</h1>
            <div className="grid">
                {watchData.map((watch) => (
                    <div key={watch.id} className="card">
                         <Image src={watch.image} alt={watch.name} width={200} height={200} className="image" />
                        <h2 className="name">{watch.name}</h2>
                        <p className="description">{watch.describe}</p>
                        <p className="price">${watch.price.toLocaleString()}</p>
                        <button className="button">Buy Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
