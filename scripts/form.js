document.addEventListener('DOMContentLoaded', function () {
    const products = [
        { id: 'sp-1234', name: "Sony PlayStation 5", avg_rating: 4.8 },
        { id: 'xb-5678', name: "Xbox Series X", avg_rating: 4.7 },
        { id: 'ipad-9000', name: "Apple iPad Pro", avg_rating: 4.6 },
        { id: 'mac-2023', name: "Apple MacBook Air M2", avg_rating: 4.9 },
        { id: 'echo-2021', name: "Amazon Echo (4th Gen)", avg_rating: 4.5 }
    ];
    

    const selectElement = document.getElementById('product-name');
    if (selectElement) {
        products.forEach(product => {
            const option = document.createElement('option');
            option.value = product.name;
            option.textContent = product.name;
            selectElement.appendChild(option);
        });
    }

    if (localStorage.getItem('reviewCount') === null) {
        localStorage.setItem('reviewCount', 0);
    }

    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;
    const copyrightYearElement = document.getElementById('currentyear');
    const lastModifiedElement = document.getElementById('lastModified');
    if (copyrightYearElement) {
        copyrightYearElement.textContent = currentYear;
    }
    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last update: ${lastModified}`;
    }
});

