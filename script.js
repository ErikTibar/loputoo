// Sample product data
const products = [
    // Electronics
    {
        id: 1,
        name: "iPhone 13",
        price: 799.99,
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500&auto=format",
        description: "Latest iPhone model with advanced features",
        category: "electronics",
        subcategory: "phones"
    },
    {
        id: 2,
        name: "MacBook Pro",
        price: 1299.99,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format",
        description: "Powerful laptop for professionals",
        category: "electronics",
        subcategory: "laptops"
    },
    {
        id: 6,
        name: "Sony WH-1000XM4",
        price: 349.99,
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&auto=format",
        description: "Premium noise-canceling headphones",
        category: "electronics",
        subcategory: "headphones"
    },
    {
        id: 9,
        name: "PlayStation 5",
        price: 499.99,
        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=500&auto=format",
        description: "Next-gen gaming console",
        category: "electronics",
        subcategory: "gaming"
    },
    {
        id: 10,
        name: "Samsung Galaxy S21",
        price: 699.99,
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&auto=format",
        description: "Feature-rich Android smartphone",
        category: "electronics",
        subcategory: "phones"
    },
    {
        id: 11,
        name: "Wireless Mouse",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&auto=format",
        description: "Ergonomic wireless mouse",
        category: "electronics",
        subcategory: "accessories"
    },

    // Clothing
    {
        id: 12,
        name: "Classic T-Shirt",
        price: 19.99,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format",
        description: "100% cotton basic tee",
        category: "clothing",
        subcategory: "shirts"
    },
    {
        id: 13,
        name: "Slim Fit Jeans",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?w=500&auto=format",
        description: "Classic blue denim jeans",
        category: "clothing",
        subcategory: "pants"
    },
    {
        id: 14,
        name: "Summer Dress",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&auto=format",
        description: "Floral print summer dress",
        category: "clothing",
        subcategory: "dresses"
    },
    {
        id: 15,
        name: "Winter Jacket",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&auto=format",
        description: "Warm winter jacket",
        category: "clothing",
        subcategory: "outerwear"
    },

    // Books
    {
        id: 16,
        name: "The Great Novel",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&auto=format",
        description: "Bestselling fiction novel",
        category: "books",
        subcategory: "fiction"
    },
    {
        id: 17,
        name: "Science Explained",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format",
        description: "Popular science book",
        category: "books",
        subcategory: "science"
    },
    {
        id: 18,
        name: "Cooking Masterclass",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=500&auto=format",
        description: "Comprehensive cookbook",
        category: "books",
        subcategory: "cooking"
    },

    // Home & Garden
    {
        id: 19,
        name: "Modern Sofa",
        price: 599.99,
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&auto=format",
        description: "Contemporary living room sofa",
        category: "home",
        subcategory: "furniture"
    },
    {
        id: 20,
        name: "Wall Art",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=500&auto=format",
        description: "Modern abstract wall decoration",
        category: "home",
        subcategory: "decor"
    },
    {
        id: 21,
        name: "Garden Planters",
        price: 34.99,
        image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&auto=format",
        description: "Set of ceramic planters",
        category: "home",
        subcategory: "garden"
    },

    // Mikk Beans Products
    {
        id: 30,
        name: "Mikk Premium Espresso Beans",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?w=500&auto=format",
        description: "Dark roasted premium espresso beans, 1lb bag",
        category: "mikkbeans",
        subcategory: "beans"
    },
    {
        id: 31,
        name: "Mikk Signature Blend",
        price: 19.99,
        image: "https://images.unsplash.com/photo-1610632380989-680fe40816c6?w=500&auto=format",
        description: "Medium roast signature blend beans, 1lb bag",
        category: "mikkbeans",
        subcategory: "beans"
    },
    {
        id: 32,
        name: "Mikk Ground Coffee",
        price: 18.99,
        image: "https://images.unsplash.com/photo-1614350292382-c448d0110dfa?w=500&auto=format",
        description: "Pre-ground medium roast coffee, 12oz bag",
        category: "mikkbeans",
        subcategory: "ground"
    },
    {
        id: 33,
        name: "Mikk Coffee Capsules",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=500&auto=format",
        description: "Compatible coffee capsules, pack of 30",
        category: "mikkbeans",
        subcategory: "capsules"
    },
    {
        id: 34,
        name: "Mikk Pour-Over Kit",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&auto=format",
        description: "Complete pour-over coffee brewing kit",
        category: "mikkbeans",
        subcategory: "equipment"
    },
    {
        id: 35,
        name: "Mikk French Press",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500&auto=format",
        description: "Stainless steel French press, 32oz",
        category: "mikkbeans",
        subcategory: "equipment"
    },
    {
        id: 36,
        name: "Mikk Beans Signature Reserve",
        price: 34.99,
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&auto=format",
        description: "Limited edition premium coffee beans, hand-selected and roasted to perfection. Single-origin Ethiopian beans with notes of blueberry, dark chocolate, and jasmine. 12oz bag.",
        category: "mikkbeans",
        subcategory: "beans"
    },
    {
        id: 37,
        name: "Mikk Beans Gold Reserve",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=500&auto=format",
        description: "Premium single-origin beans in a collector's tin",
        category: "mikkbeans",
        subcategory: "signature"
    },
    {
        id: 38,
        name: "Winter Wonderland Blend",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1610632380989-680fe40816c6?w=500&auto=format",
        description: "Limited edition winter blend with hints of chocolate and cinnamon",
        category: "mikkbeans",
        subcategory: "seasonal"
    },
    {
        id: 39,
        name: "World Tour Coffee Set",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=500&auto=format",
        description: "Collection of 4 different single-origin beans",
        category: "mikkbeans",
        subcategory: "bundles"
    },
    {
        id: 40,
        name: "Premium Coffee Gift Box",
        price: 149.99,
        image: "https://images.unsplash.com/photo-1606791405792-1004f1718d0c?w=500&auto=format",
        description: "Luxury gift set with beans, grinder, and brewing equipment",
        category: "mikkbeans",
        subcategory: "gifts"
    },
    {
        id: 41,
        name: "Mikk Beans Coffee Scale",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?w=500&auto=format",
        description: "Digital precision scale for perfect brewing",
        category: "mikkbeans",
        subcategory: "accessories"
    },
    {
        id: 42,
        name: "Mikk Beans Travel Mug",
        price: 34.99,
        image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&auto=format",
        description: "Double-walled stainless steel travel mug",
        category: "mikkbeans",
        subcategory: "accessories"
    },
    {
        id: 43,
        name: "Mikk Beans",
        price: 59.99,
        image: "images-4.jpeg",
        description: "Ultra-premium single-origin beans from the mountains of Jamaica. Hand-picked, sun-dried, and roasted to perfection. Features notes of caramel, wild berries, and dark chocolate. Limited edition 8oz bag in luxury packaging.",
        category: "mikkbeans",
        subcategory: "signature"
    }
];

let cart = [];
let reviews = {};

// Display products with review button
function displayProducts(productsToShow = products) {
    const productsContainer = document.querySelector('.products-grid');
    
    if (productsToShow.length === 0) {
        productsContainer.innerHTML = '<p class="no-products">No products found in this category</p>';
        return;
    }

    productsContainer.innerHTML = productsToShow.map(product => `
        <div class="product-card" onclick="showProductDetails(${product.id})">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">$${product.price.toFixed(2)}</p>
            <p class="description">${product.description}</p>
            <p class="category-tag">${product.subcategory || product.category}</p>
            <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${product.id})">
                Add to Cart
            </button>
        </div>
    `).join('');
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCartCount();
    
    // Show feedback message
    const feedback = document.createElement('div');
    feedback.textContent = 'Added to cart!';
    feedback.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #4CAF50;
        color: white;
        padding: 1rem;
        border-radius: 4px;
        animation: fadeInOut 2s forwards;
    `;
    document.body.appendChild(feedback);
    
    setTimeout(() => {
        feedback.remove();
    }, 2000);
}

// Update cart count
function updateCartCount() {
    document.getElementById('cart-count').textContent = cart.length;
}

// Show cart with enhanced functionality
function showCart() {
    const modal = document.getElementById('cart-modal');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart-message">Your cart is empty</div>';
        cartTotal.textContent = '0.00';
    } else {
        cartItems.innerHTML = cart.map((item, index) => `
            <div class="cart-item" id="cart-item-${index}">
                <h3>${item.name}</h3>
                <p>$${item.price.toFixed(2)}</p>
                <button onclick="removeFromCart(${item.id}, ${index})" 
                        onmouseover="this.textContent='Remove'" 
                        onmouseout="this.textContent='×'">×</button>
            </div>
        `).join('');
        
        updateCartTotal();
    }
    
    modal.style.display = 'block';
}

// Remove item from cart with animation
function removeFromCart(productId, index) {
    const itemElement = document.getElementById(`cart-item-${index}`);
    
    // Add fade-out animation
    itemElement.style.transition = 'opacity 0.3s';
    itemElement.style.opacity = '0';
    
    // Wait for animation to complete before removing
    setTimeout(() => {
        cart = cart.filter(item => item.id !== productId);
        updateCartCount();
        showCart();
    }, 300);
}

// Update cart total
function updateCartTotal() {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('cart-total').textContent = total.toFixed(2);
}

// Checkout function
function checkout() {
    alert('Thank you for your purchase!');
    cart = [];
    updateCartCount();
    document.getElementById('cart-modal').style.display = 'none';
}

// Open review modal
function openReviewModal(productId) {
    document.getElementById('review-product-id').value = productId;
    document.getElementById('review-modal').style.display = 'block';
}

// Handle review submission
document.getElementById('review-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const productId = document.getElementById('review-product-id').value;
    const rating = parseInt(document.getElementById('review-rating').value);

    if (!reviews[productId]) {
        reviews[productId] = [];
    }
    reviews[productId].push(rating);

    document.getElementById('review-modal').style.display = 'none';
    displayProducts();
});

// Calculate average rating
function getAverageRating(productId) {
    if (!reviews[productId] || reviews[productId].length === 0) {
        return 'No reviews yet';
    }
    const total = reviews[productId].reduce((sum, rating) => sum + rating, 0);
    return (total / reviews[productId].length).toFixed(1);
}

// Search products function
function searchProducts() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase().trim();
    
    if (searchTerm === '') {
        displayProducts(); // Show all products if search is empty
        return;
    }
    
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
    );
    
    displayProducts(filteredProducts);
}

// Add event listener for Enter key in search input
document.getElementById('search-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        searchProducts();
    }
});

// Reset view to show all products
function resetView() {
    // Clear search input
    document.getElementById('search-input').value = '';
    
    // Hide all submenus
    const allSubmenus = ['electronics-submenu', 'clothing-submenu', 'books-submenu', 'home-submenu'];
    allSubmenus.forEach(menu => {
        document.getElementById(menu).style.display = 'none';
    });
    
    // Reset active buttons
    document.querySelectorAll('.category-btn, .subcategory-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show all products
    displayProducts(products);
}

// Add event listener to Home button
document.getElementById('home-button').addEventListener('click', function(event) {
    event.preventDefault();
    resetView();
});

// Initialize the page
displayProducts();

// Add this CSS animation to your styles.css
document.head.insertAdjacentHTML('beforeend', `
    <style>
        @keyframes fadeInOut {
            0% { opacity: 0; transform: translateY(-20px); }
            20% { opacity: 1; transform: translateY(0); }
            80% { opacity: 1; transform: translateY(0); }
            100% { opacity: 0; transform: translateY(-20px); }
        }
    </style>
`);

// Open checkout window
function openCheckout() {
    const checkoutModal = document.getElementById('checkout-modal');
    const checkoutItems = document.getElementById('checkout-items');
    const checkoutTotal = document.getElementById('checkout-total');
    
    // Display items in checkout
    checkoutItems.innerHTML = cart.map(item => `
        <div class="checkout-item">
            <span>${item.name}</span>
            <span>$${item.price.toFixed(2)}</span>
        </div>
    `).join('');
    
    // Update total
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    checkoutTotal.textContent = total.toFixed(2);
    
    // Hide cart modal and show checkout
    document.getElementById('cart-modal').style.display = 'none';
    checkoutModal.style.display = 'block';
}

// Close checkout window
function closeCheckout() {
    const checkoutModal = document.getElementById('checkout-modal');
    checkoutModal.style.display = 'none';
    
    // Reset the form when closing
    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) {
        checkoutForm.reset();
    }
}

// Handle checkout form submission
document.getElementById('checkout-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(event.target);
    const orderData = {
        items: cart,
        total: cart.reduce((sum, item) => sum + item.price, 0),
        customer: {
            name: formData.get('fullName'),
            email: formData.get('email'),
            address: formData.get('address'),
            city: formData.get('city'),
            zipCode: formData.get('zipCode')
        }
    };
    
    // Simulate order processing
    processOrder(orderData);
});

// Process order (simulation)
function processOrder(orderData) {
    // Show loading state
    const checkoutForm = document.getElementById('checkout-form');
    checkoutForm.innerHTML = '<div class="processing">Processing your order...</div>';
    
    // Simulate API call
    setTimeout(() => {
        // Clear cart and show success message
        cart = [];
        updateCartCount();
        
        checkoutForm.innerHTML = `
            <div class="success-message">
                <h3>Order Successful!</h3>
                <p>Thank you for your purchase, ${orderData.customer.name}!</p>
                <p>We've sent a confirmation email to ${orderData.customer.email}</p>
                <button onclick="closeCheckout()">Continue Shopping</button>
            </div>
        `;
    }, 2000);
}

// Close cart window
function closeCart() {
    document.getElementById('cart-modal').style.display = 'none';
}

// Filter products by category
function filterProducts(category) {
    // Hide all submenus first
    const allSubmenus = ['electronics-submenu', 'clothing-submenu', 'books-submenu', 'home-submenu'];
    allSubmenus.forEach(menu => {
        document.getElementById(menu).style.display = 'none';
    });
    
    // Show appropriate submenu and filter products
    switch(category) {
        case 'electronics':
        case 'clothing':
        case 'books':
        case 'home':
            document.getElementById(`${category}-submenu`).style.display = 'block';
            filterSubcategory(category, 'all');
            break;
        case 'all':
            displayProducts(products);
            break;
        default:
            const filteredProducts = products.filter(product => product.category === category);
            displayProducts(filteredProducts);
    }
    
    updateActiveButton(category);
}

// Update the category buttons in the HTML to use proper onclick handlers
document.addEventListener('DOMContentLoaded', function() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('onclick').match(/'([^']+)'/)[1];
            filterProducts(category);
        });
    });
});

// Generic subcategory filter function
function filterSubcategory(category, subcategory) {
    console.log(`Filtering ${category} - ${subcategory}`); // Debug log
    
    let filteredProducts;
    if (subcategory === 'all') {
        filteredProducts = products.filter(product => product.category === category);
    } else {
        filteredProducts = products.filter(product => 
            product.category === category && product.subcategory === subcategory
        );
    }
    
    // Update active states
    updateActiveButton(category);
    updateActiveSubcategoryButton(subcategory);
    
    // Animate transition
    const productsContainer = document.querySelector('.products-grid');
    productsContainer.style.opacity = '0';
    
    setTimeout(() => {
        displayProducts(filteredProducts);
        productsContainer.style.opacity = '1';
    }, 300);
}

// Update active button states
function updateActiveButton(category) {
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.onclick.toString().includes(category)) {
            btn.classList.add('active');
        }
    });
}

function updateActiveSubcategoryButton(subcategory) {
    document.querySelectorAll('.subcategory-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.onclick.toString().includes(subcategory)) {
            btn.classList.add('active');
        }
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Display all products on initial load
    filterProducts('all');
});

// Add reviews storage to our existing code
const productReviews = {};

// Add review form function
function showReviewForm(productId) {
    const product = products.find(p => p.id === productId);
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'review-modal';
    
    modal.innerHTML = `
        <div class="modal-content review-form">
            <span class="close-button" onclick="closeReviewModal()">&times;</span>
            <h2>Review ${product.name}</h2>
            <form id="review-form" onsubmit="submitReview(event, ${productId})">
                <div class="rating-select">
                    <label>Rating:</label>
                    <select name="rating" required>
                        <option value="">Select rating</option>
                        <option value="5">5 - Excellent</option>
                        <option value="4">4 - Very Good</option>
                        <option value="3">3 - Good</option>
                        <option value="2">2 - Fair</option>
                        <option value="1">1 - Poor</option>
                    </select>
                </div>
                <div class="review-text">
                    <label>Your Review:</label>
                    <textarea name="review" required minlength="10" placeholder="Write your review here..."></textarea>
                </div>
                <button type="submit">Submit Review</button>
            </form>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'block';
}

// Submit review function
function submitReview(event, productId) {
    event.preventDefault();
    const form = event.target;
    const rating = parseInt(form.rating.value);
    const text = form.review.value;
    
    if (!productReviews[productId]) {
        productReviews[productId] = [];
    }
    
    productReviews[productId].push({
        rating,
        text,
        date: new Date().toLocaleDateString()
    });
    
    closeReviewModal();
    showProductDetails(productId); // Refresh the product details to show new review
}

// Close review modal
function closeReviewModal() {
    const modal = document.getElementById('review-modal');
    modal.remove();
}

// Make sure showProductDetails function is properly defined
function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    const modal = document.getElementById('product-modal');
    const content = document.getElementById('product-detail-content');
    
    if (!product) return; // Guard clause in case product isn't found
    
    content.innerHTML = `
        <span class="close-button" onclick="closeProductModal()">&times;</span>
        <div class="product-detail-layout">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h2>${product.name}</h2>
                <p class="price">$${product.price.toFixed(2)}</p>
                <p class="description">${product.description}</p>
                <p class="category">Category: ${product.category}</p>
                <button onclick="addToCart(${product.id})" class="add-to-cart-btn">
                    Add to Cart
                </button>
                <button onclick="showReviewForm(${product.id})" class="review-btn">
                    Write a Review
                </button>
            </div>
        </div>
        <div class="reviews-section">
            <h3>Reviews (${productReviews[productId]?.length || 0})</h3>
            <div class="reviews-list">
                ${(productReviews[productId] || []).map(review => `
                    <div class="review-item">
                        <div class="review-header">
                            <span class="review-rating">★ ${review.rating}</span>
                            <span class="review-date">${review.date}</span>
                        </div>
                        <p class="review-text">${review.text}</p>
                    </div>
                `).join('') || '<p>No reviews yet. Be the first to review!</p>'}
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
}

// Add closeProductModal function
function closeProductModal() {
    const modal = document.getElementById('product-modal');
    modal.style.display = 'none';
}

// Add click outside modal to close
window.onclick = function(event) {
    const modal = document.getElementById('product-modal');
    if (event.target === modal) {
        closeProductModal();
    }
}

// Add escape key to close
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeProductModal();
    }
});

// Update the subcategory filter functions
function filterElectronics(subcategory) {
    filterSubcategory('electronics', subcategory);
}

function filterClothing(subcategory) {
    filterSubcategory('clothing', subcategory);
}

function filterBooks(subcategory) {
    filterSubcategory('books', subcategory);
}

function filterHome(subcategory) {
    filterSubcategory('home', subcategory);
}

// Initialize subcategory buttons when document loads
document.addEventListener('DOMContentLoaded', function() {
    // Initialize category buttons
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('onclick').match(/'([^']+)'/)[1];
            filterProducts(category);
        });
    });

    // Initialize subcategory buttons
    const subcategoryButtons = document.querySelectorAll('.subcategory-btn');
    subcategoryButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const onclick = this.getAttribute('onclick');
            if (onclick) {
                // Extract category and subcategory from onclick attribute
                const match = onclick.match(/filter(\w+)\('(\w+)'\)/);
                if (match) {
                    const category = match[1].toLowerCase();
                    const subcategory = match[2];
                    filterSubcategory(category, subcategory);
                }
            }
        });
    });
});

// Add filter function for Mikk Beans
function filterMikkBeans(subcategory) {
    filterSubcategory('mikkbeans', subcategory);
}
