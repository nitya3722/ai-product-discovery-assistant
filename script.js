const products = [
    {
        name: "Smartphone A",
        price: "₹15,999",
        features: "Good camera, long battery life",
        keywords: ["phone", "camera", "battery", "budget"]
    },
    {
        name: "Smartphone B",
        price: "₹22,999",
        features: "Excellent camera, fast processor",
        keywords: ["phone", "camera", "performance"]
    },
    {
        name: "Laptop A",
        price: "₹45,999",
        features: "Good performance and battery life",
        keywords: ["laptop", "performance", "battery", "student"]
    },
    {
        name: "Laptop B",
        price: "₹59,999",
        features: "Powerful processor and large storage",
        keywords: ["laptop", "storage", "performance"]
    }
];

function recommendProducts() {

    const input = document
        .getElementById("userInput")
        .value
        .toLowerCase();

    const results = document.getElementById("results");

    if (input.trim() === "") {
        results.innerHTML = "<p>Please describe what product you need.</p>";
        return;
    }

    const recommended = products.filter(product =>
        product.keywords.some(keyword => input.includes(keyword))
    );

    if (recommended.length === 0) {
        results.innerHTML = `
            <div class="product">
                <h3>No exact match found</h3>
                <p>Try searching for a phone, laptop, camera, battery or student laptop.</p>
            </div>
        `;
        return;
    }

    results.innerHTML = "<h2>Recommended Products</h2>";

    recommended.forEach(product => {
        results.innerHTML += `
            <div class="product">
                <h3>${product.name}</h3>
                <p><strong>Price:</strong> ${product.price}</p>
                <p><strong>Features:</strong> ${product.features}</p>
                <p><strong>Why recommended:</strong> Matches your requirements.</p>
            </div>
        `;
    });
}
