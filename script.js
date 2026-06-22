/* ==========================================================================
   TOUQAS FOODS INTEGRATED WEB CORE SYSTEM ARCHITECTURE
   Core Engine: Data Schemas, Active Frontend Cart Matrix, Secure Callouts
   ========================================================================== */

/* --------------------------------------------------------------------------
   01. REUSABLE DATA STRUCTURE: MASTERPIECE FOOD PRODUCTS ARRAY SCHEMA
   -------------------------------------------------------------------------- */
const TOUQAS_MENU_DATABASE = [
    // --- CATEGORY A: SIGNATURE MOMOS ---
    {
        id: "momo-01",
        name: "Chicken Steamed Momos",
        category: "momos",
        price: 450,
        image: "assets/momo_steamed.jpg",
        description: "Delicate handmade translucent wrappers packed with premium seasoned minced chicken breast herbs. Served with traditional dipping jhol chutney broth.",
        availability: true,
        tag: "Best Seller"
    },
    {
        id: "momo-02",
        name: "Chicken Fried Momos",
        category: "momos",
        price: 490,
        image: "assets/momo_fried.jpg",
        description: "Our signature steamed chicken dumplings deep crisped to a golden outer crunch shell while retaining extreme inner broth locked moisture.",
        availability: true,
        tag: "Crunchy"
    },
    {
        id: "momo-03",
        name: "Cheese Momos",
        category: "momos",
        price: 580,
        image: "assets/momo_cheese.jpg",
        description: "A decadent hybrid melt. Minced chicken core infused with high-string mozzarella cheese blocks melting under active cooking vapor matrices.",
        availability: true,
        tag: "Chef Special"
    },
    {
        id: "momo-04",
        name: "Tandoori Momos",
        category: "momos",
        price: 550,
        image: "assets/momo_tandoori.jpg",
        description: "Dumplings coated in thick spiced red yogurt tandoori marinade, then char-skewer roasted for absolute smoky rustic restaurant depth flavor.",
        availability: true,
        tag: "Smoky"
    },
    {
        id: "momo-05",
        name: "Beef Momos",
        category: "momos",
        price: 590,
        image: "assets/momo_beef.jpg",
        description: "Rich premium minced lean beef cuts heavily loaded with scallions, crushed ginger, and secret native mountain spices.",
        availability: true,
        tag: "Premium"
    },
    {
        id: "momo-06",
        name: "Schezwan Momos",
        category: "momos",
        price: 520,
        image: "assets/momo_schezwan.jpg",
        description: "Steamed chicken units tossed in a fiery hot wok pan coated completely in an intense spicy, tangy garlic house schezwan sauce reduction glaze.",
        availability: true,
        tag: "Very Spicy"
    },
    {
        id: "momo-07",
        name: "Jhol Momos",
        category: "momos",
        price: 540,
        image: "assets/momo_jhol.jpg",
        description: "Himalayan classic configuration. Dumplings completely immersed inside an ambient, cold tangy sesame-peanut spiced soup slurry lake.",
        availability: true,
        tag: "Authentic"
    },
    {
        id: "momo-08",
        name: "Veg Momos",
        category: "momos",
        price: 390,
        image: "assets/momo_veg.jpg",
        description: "Finely shredded organic green cabbage, carrots, sweet corn kernels, and spring onions seasoned lightly with pure dark soy concentrates.",
        availability: true,
        tag: "Healthy"
    },

    // --- CATEGORY B: PREMIUM BURGERS ---
    {
        id: "burger-01",
        name: "Classic Beef Burger",
        category: "burgers",
        price: 650,
        image: "assets/burger_classic.jpg",
        description: "Premium prime beef smash patty grilled perfectly over flat iron flame. Pickles, lettuce, and our house signature burger sauce spread.",
        availability: true,
        tag: "Flame Grilled"
    },
    {
        id: "burger-02",
        name: "Double Beef Burger",
        category: "burgers",
        price: 890,
        image: "assets/burger_double.jpg",
        description: "Two heavy 150g smash patties layered with twin melting cheddar cheese slices on toasted buttery brioche buns. Extreme flavor index.",
        availability: true,
        tag: "Elite Choice"
    },
    {
        id: "burger-03",
        name: "Cheese Beef Burger",
        category: "burgers",
        price: 720,
        image: "assets/burger_cheese.jpg",
        description: "Our lean iron-crusted patty completely submerged under a thick lava layer of liquid cheddar cheese melt spray matrix.",
        availability: true,
        tag: "Cheese Bomb"
    },
    {
        id: "burger-04",
        name: "Signature Burger",
        category: "burgers",
        price: 790,
        image: "assets/burger_signature.jpg",
        description: "Crispy fried chicken fillet topped with slow smoke-cooked brisket bacon strips, crispy onion ring circles, and secret dynamic honey mustard vectors.",
        availability: true,
        tag: "Touqas Special"
    },

    // --- CATEGORY C: LOADED FRIES ---
    {
        id: "fries-01",
        name: "Regular Fries",
        category: "fries",
        price: 250,
        image: "assets/fries_regular.jpg",
        description: "Straight-cut premium imported skinless russet potato batons deep crisped uniformly. Lightly seasoned with fine sea salt crystals.",
        availability: true,
        tag: "Classic"
    },
    {
        id: "fries-02",
        name: "Masala Fries",
        category: "fries",
        price: 280,
        image: "assets/fries_masala.jpg",
        description: "Golden crispy potato fries dusted heavily in our complex local spicy chat masala zesty spice parameters.",
        availability: true,
        tag: "Local Zing"
    },
    {
        id: "fries-03",
        name: "Cheese Fries",
        category: "fries",
        price: 390,
        image: "assets/fries_cheese.jpg",
        description: "A beautiful bed of crisp fries covered entirely in an overarching golden hot cheddar cheese sauce blanket overlay stream.",
        availability: true,
        tag: "Creamy"
    },
    {
        id: "fries-04",
        name: "Loaded Fries",
        category: "fries",
        price: 550,
        image: "assets/fries_loaded.jpg",
        description: "Heavy tray configuration. Crispy fries layered with grilled chopped chicken cubes, diced jalapenos, black olive slices, house special sauce, and melted mozzarella.",
        availability: true,
        tag: "Crowd Favorite"
    },

    // --- CATEGORY D: PIZZA LINE ---
    {
        id: "pizza-01",
        name: "Chicken Tikka Pizza",
        category: "pizza",
        price: 1100,
        image: "assets/pizza_tikka.jpg",
        description: "Slow artisanal dough crust topped with smoky clay-oven cooked chicken tikka cubes, red onion slices, and pristine mozzarella string layers.",
        availability: true,
        tag: "Top Local"
    },
    {
        id: "pizza-02",
        name: "Fajita Pizza",
        category: "pizza",
        price: 1150,
        image: "assets/pizza_fajita.jpg",
        description: "Sautéed Mexican-spiced chicken strips, sweet bell pepper bands, yellow onions, and loaded premium cheese layers over rich tomato paste base.",
        availability: true,
        tag: "Savory"
    },
    {
        id: "pizza-03",
        name: "Cheese Lover Pizza",
        category: "pizza",
        price: 990,
        image: "assets/pizza_cheese.jpg",
        description: "Minimalist perfection. Multi-layered density blend of finest processed white mozzarella, sharp cheddar, and premium local parmesan notes.",
        availability: true,
        tag: "Vegetarian"
    },
    {
        id: "pizza-04",
        name: "Kabab Crust Pizza",
        category: "pizza",
        price: 1350,
        image: "assets/pizza_kabab.jpg",
        description: "Architectural masterwork. The outer perimeter ring crust is completely folded with juicy barbecued minced chicken seekh kababs.",
        availability: true,
        tag: "Heavy Premium"
    },
    {
        id: "pizza-05",
        name: "Special Touqas Pizza",
        category: "pizza",
        price: 1450,
        image: "assets/pizza_touqas.jpg",
        description: "The ultimate matrix spread. Chicken tikka, smoked beef pepperoni sheets, mushrooms, green peppers, black olives, sweet corn, and double cheese blanket layer.",
        availability: true,
        tag: "Ultimate Signature"
    },

    // --- CATEGORY E: INJECTED BROAST ---
    {
        id: "broast-01",
        name: "Single Piece Broast",
        category: "broast",
        price: 320,
        image: "assets/broast_single.jpg",
        description: "Isolated chicken breast/thigh unit deep flavor marination pressure fried using our premier crispy skin texture scaling model.",
        availability: true,
        tag: "Quick Snack"
    },
    {
        id: "broast-02",
        name: "Full Broast Meal",
        category: "broast",
        price: 1100,
        image: "assets/broast_meal.jpg",
        description: "4 Golden crisp crispy pressure fried chicken pieces served with regular salted fries basket, soft toasted bun element, and garlic mayonnaise dipping cup.",
        availability: true,
        tag: "Family Box"
    },
    {
        id: "broast-03",
        name: "Spicy Injected Broast",
        category: "broast",
        price: 1180,
        image: "assets/broast_spicy.jpg",
        description: "Deep tissue flavor integration. High-velocity injection vectors embed our spicy liquid cayenne pepper marinade blend directly to the bone core before crunch flour dredging.",
        availability: true,
        tag: "Extreme Spice"
    },

    // --- CATEGORY F: COMBO DEALS ---
    {
        id: "combo-01",
        name: "Burger + Fries + Drink",
        category: "combos",
        price: 850,
        image: "assets/combo_1.jpg",
        description: "1 Classic Beef Burger matched alongside a regular crisp salted fries layout and a cold 350ml canned soft drink unit.",
        availability: true,
        tag: "Value Combo"
    },
    {
        id: "combo-02",
        name: "Pizza Slice Combo",
        category: "combos",
        price: 590,
        image: "assets/combo_2.jpg",
        description: "Two heavy premium slices of our Chicken Tikka Pizza linked with a regular masala fries tray and choice soft drink.",
        availability: true,
        tag: "Lunch Box"
    },
    {
        id: "combo-03",
        name: "Momos + Drink Combo",
        category: "combos",
        price: 550,
        image: "assets/combo_3.jpg",
        description: "6 Pieces of Chicken Steamed Momos including original jhol broth paired with an icy cold mint margarita refresher glass.",
        availability: true,
        tag: "Perfect Snack"
    },
    {
        id: "combo-04",
        name: "Family Combo",
        category: "combos",
        price: 2990,
        image: "assets/combo_4.jpg",
        description: "1 Special Touqas Pizza, 1 Full Broast Meal (4pcs), 8 pieces of Chicken Steamed Momos, and one 1.5L family soft drink bottle.",
        availability: true,
        tag: "Mega Discount"
    },
    {
        id: "combo-05",
        name: "Friends Combo",
        category: "combos",
        price: 1850,
        image: "assets/combo_5.jpg",
        description: "2 Classic Beef Burgers, 2 orders of Chicken Fried Momos, 1 Loaded Fries tray, and three 350ml soft drink cans.",
        availability: true,
        tag: "Party Pack"
    },
    {
        id: "combo-06",
        name: "Broast Combo",
        category: "combos",
        price: 1350,
        image: "assets/combo_6.jpg",
        description: "Full Broast Meal (4pcs crispy segments) matched with an additional layered Cheese Beef Burger item unit and regular drink.",
        availability: true,
        tag: "Meat Feast"
    },

    // --- CATEGORY G: DRINKS ---
    {
        id: "drink-01",
        name: "Soft Drinks (Canned)",
        category: "drinks",
        price: 120,
        image: "assets/drink_soda.jpg",
        description: "Chilled selection options: Pepsi, Coke, Sprite, Fanta, or 7Up 350ml carbonated aluminum units.",
        availability: true,
        tag: "Chilled"
    },
    {
        id: "drink-02",
        name: "Mineral Water",
        category: "drinks",
        price: 80,
        image: "assets/drink_water.jpg",
        description: "Pristine micro-filtered premium pure mineral drinking spring water bottle 500ml size.",
        availability: true,
        tag: "Pure"
    },
    {
        id: "drink-03",
        name: "Mint Margarita",
        category: "drinks",
        price: 250,
        image: "assets/drink_margarita.jpg",
        description: "Artisanal crushed ice mocktail mixed intensely with fresh green mint leaves, squeezed lime juice, and carbonated transparent soda sprigs.",
        availability: true,
        tag: "Signature Refreshment"
    },
    {
        id: "drink-04",
        name: "Fresh Lime",
        category: "drinks",
        price: 180,
        image: "assets/drink_lime.jpg",
        description: "Freshly hand-extracted zesty lemon pulp fluids combined smoothly with sparkling soda water and sugar syrups.",
        availability: true,
        tag: "Tangy Zest"
    },
    {
        id: "drink-05",
        name: "Cold Coffee",
        category: "drinks",
        price: 380,
        image: "assets/drink_coffee.jpg",
        description: "Rich dark roasted espresso shots blended thoroughly with full-fat ice cream milk creamers and dark chocolate drizzle layers.",
        availability: true,
        tag: "Cafe Classic"
    },

    // --- CATEGORY H: UPCOMING DISHES (COMING SOON PRE-RENDER LOGIC) ---
    {
        id: "soon-01",
        name: "Korean Wings",
        category: "upcoming-dishes",
        price: 0,
        image: "assets/soon_wings.jpg",
        description: "Crispy double-fried chicken wings drenched in sticky sweet, savory gochujang chili paste glaze and toasted sesame seeds.",
        availability: false,
        tag: "Coming Soon"
    },
    {
        id: "soon-02",
        name: "Pasta Bowls",
        category: "upcoming-dishes",
        price: 0,
        image: "assets/soon_pasta.jpg",
        description: "Al dente fettuccine strands tossed inside rich buttery garlic cream Alfredo sauce matrix topped with flame-charred chicken breast lines.",
        availability: false,
        tag: "Coming Soon"
    },
    {
        id: "soon-03",
        name: "Loaded Shawarma Fries",
        category: "upcoming-dishes",
        price: 0,
        image: "assets/soon_shawarma.jpg",
        description: "A cross-cultural fusion. Crispy potato batons covered completely in shredded spit-roasted Levant chicken shawarma shavings and pure white tahini garlic sauce.",
        availability: false,
        tag: "Coming Soon"
    },
    {
        id: "soon-04",
        name: "Special Wraps",
        category: "upcoming-dishes",
        price: 0,
        image: "assets/soon_wrap.jpg",
        description: "Fluffy flatbread tortillas rolling up deep-fried zinger chicken strips, pickle indexes, and sharp jalapeño cheese dressing formulas.",
        availability: false,
        tag: "Coming Soon"
    },
    {
        id: "soon-05",
        name: "Dessert Cups",
        category: "upcoming-dishes",
        price: 0,
        image: "assets/soon_dessert.jpg",
        description: "Gourmet multi-layered glass cups loaded with rich lotus biscoff spreads, crushed cookies, vanilla bean mousses, and dense chocolate fudges.",
        availability: false,
        tag: "Coming Soon"
    }
];

/* --------------------------------------------------------------------------
   02. CLIENT-SIDE PERSISTENT CART SYSTEM LOGIC FRAMEWORK
   -------------------------------------------------------------------------- */
let AUTOMATED_GLOBAL_CART = [];

// Initialize DOM Nodes References Coordinates
const menuGrid = document.getElementById('menuGrid');
const menuTabs = document.getElementById('menuTabs');
const cartTrigger = document.getElementById('cartTrigger');
const cartCount = document.getElementById('cartCount');
const cartDrawerOverlay = document.getElementById('cartDrawerOverlay');
const cartDrawerSidebar = document.getElementById('cartDrawerSidebar');
const cartCloseBtn = document.getElementById('cartCloseBtn');
const cartDrawerBody = document.getElementById('cartDrawerBody');
const cartDrawerFooter = document.getElementById('cartDrawerFooter');
const cartSubtotal = document.getElementById('cartSubtotal');
const cartLoyaltyEarn = document.getElementById('cartLoyaltyEarn');
const emptyCartBtn = document.getElementById('emptyCartBtn');
const goToCheckoutBtn = document.getElementById('goToCheckoutBtn');

const checkoutModal = document.getElementById('checkoutModal');
const checkoutCloseBtn = document.getElementById('checkoutCloseBtn');
const checkoutInvoiceList = document.getElementById('checkoutInvoiceList');
const invoiceSubtotal = document.getElementById('invoiceSubtotal');
const invoiceGrossTotal = document.getElementById('invoiceGrossTotal');
const touqasOrderForm = document.getElementById('touqasOrderForm');

/* --------------------------------------------------------------------------
   03. MENU GRID GRAPHICS RENDERING CORE ENGINE
   -------------------------------------------------------------------------- */
function executeMenuCardRendering(categoryFilter = "all") {
    if (!menuGrid) return;
    menuGrid.innerHTML = "";
    
    const filteredDataset = categoryFilter === "all" 
        ? TOUQAS_MENU_DATABASE 
        : TOUQAS_MENU_DATABASE.filter(item => item.category === categoryFilter);
        
    if(filteredDataset.length === 0) {
        menuGrid.innerHTML = `<p style="text-align:center; grid-column:1/-1; color:var(--cream-dark); opacity:0.6;">No items found in this section alignment.</p>`;
        return;
    }
    
    filteredDataset.forEach(item => {
        const cardNode = document.createElement('div');
        cardNode.className = "food-card";
        
        // Unsplash secure image fallback layers mapper logic
        let imageSrcFallback = item.image;
        if(item.id.startsWith("momo")) imageSrcFallback = "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=500&q=80";
        else if(item.id.startsWith("burger")) imageSrcFallback = "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80";
        else if(item.id.startsWith("fries")) imageSrcFallback = "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=500&q=80";
        else if(item.id.startsWith("pizza")) imageSrcFallback = "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80";
        else if(item.id.startsWith("broast")) imageSrcFallback = "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=500&q=80";
        else if(item.id.startsWith("combo")) imageSrcFallback = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=500&q=80";
        else if(item.id.startsWith("drink")) imageSrcFallback = "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=500&q=80";
        else imageSrcFallback = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=500&q=80";

        let actionInterfaceHtml = "";
        if (item.availability) {
            actionInterfaceHtml = `
                <div class="food-pricing-row">
                    <span class="price-tag">PKR ${item.price}</span>
                </div>
                <div class="food-card-actions">
                    <button class="btn-card-add" onclick="addItemToTrayPipeline('${item.id}')"><i class="fa-solid fa-cart-plus"></i> Add To Cart</button>
                    <button class="btn-card-wa" onclick="triggerDirectItemWhatsAppFulfillment('${item.id}')" title="Order Single Item on WhatsApp"><i class="fa-brands fa-whatsapp"></i></button>
                </div>
            `;
        } else {
            actionInterfaceHtml = `
                <div class="food-pricing-row">
                    <span class="price-tag text-orange" style="font-size:0.95rem; text-transform:uppercase;">Coming Soon</span>
                </div>
                <button class="btn-notify-soon" onclick="alert('System Notification Registration Secure Locked! We will notify you via brand broadcasts once ${item.name} rolls off production lines.')"><i class="fa-solid fa-bell"></i> Notify Me On Launch</button>
            `;
        }
        
        cardNode.innerHTML = `
            <div class="food-card-visual">
                <span class="food-badge ${!item.availability ? 'badge-soon' : ''}">${item.tag}</span>
                <img src="${item.image}" alt="${item.name}" class="food-img" onerror="this.src='${imageSrcFallback}'">
            </div>
            <div class="food-card-details">
                <h3 class="food-title">${item.name}</h3>
                <p class="food-desc">${item.description}</p>
                ${actionInterfaceHtml}
            </div>
        `;
        menuGrid.appendChild(cardNode);
    });
}

/* --------------------------------------------------------------------------
   04. CART PIPELINE FUNCTIONAL CORE ALGORITHMS
   -------------------------------------------------------------------------- */
function addItemToTrayPipeline(itemId) {
    const locateTargetProduct = TOUQAS_MENU_DATABASE.find(p => p.id === itemId);
    if (!locateTargetProduct) return;
    
    const duplicateCheckItem = AUTOMATED_GLOBAL_CART.find(cartItem => cartItem.product.id === itemId);
    
    if (duplicateCheckItem) {
        duplicateCheckItem.quantity += 1;
    } else {
        AUTOMATED_GLOBAL_CART.push({
            product: locateTargetProduct,
            quantity: 1
        });
    }
    
    synchronizeCartInterfaceState();
    triggerCartSidebarToggle(true); // Auto flash open drawer for clear sales focus conversion feedback
}

function adjustCartItemQuantityNode(itemId, scalingFactor) {
    const locateCartItem = AUTOMATED_GLOBAL_CART.find(cartItem => cartItem.product.id === itemId);
    if (!locateCartItem) return;
    
    locateCartItem.quantity += scalingFactor;
    if (locateCartItem.quantity <= 0) {
        AUTOMATED_GLOBAL_CART = AUTOMATED_GLOBAL_CART.filter(cartItem => cartItem.product.id !== itemId);
    }
    synchronizeCartInterfaceState();
}

function completelyEraseCartItemRow(itemId) {
    AUTOMATED_GLOBAL_CART = AUTOMATED_GLOBAL_CART.filter(cartItem => cartItem.product.id !== itemId);
    synchronizeCartInterfaceState();
}

function clearWholeBasketTray() {
    AUTOMATED_GLOBAL_CART = [];
    synchronizeCartInterfaceState();
}

function synchronizeCartInterfaceState() {
    // 1. Calculate cumulative count values
    const netCountSum = AUTOMATED_GLOBAL_CART.reduce((acc, curr) => acc + curr.quantity, 0);
    if(cartCount) cartCount.innerText = netCountSum;
    
    // 2. Calculate Gross Totals
    const grossPriceSubtotal = AUTOMATED_GLOBAL_CART.reduce((acc, curr) => acc + (curr.product.price * curr.quantity), 0);
    
    // 3. Loyalty Rule Math Engine: Spend PKR 200 = 1 Point
    const potentialEarnedLoyaltyPoints = Math.floor(grossPriceSubtotal / 200);
    
    if(cartSubtotal) cartSubtotal.innerText = `PKR ${grossPriceSubtotal}`;
    if(cartLoyaltyEarn) cartLoyaltyEarn.innerText = `${potentialEarnedLoyaltyPoints} Pts`;
    
    // 4. Render Layout Nodes into Drawer Viewport
    if (!cartDrawerBody) return;
    cartDrawerBody.innerHTML = "";
    
    if (AUTOMATED_GLOBAL_CART.length === 0) {
        cartDrawerBody.innerHTML = `
            <div class="empty-cart-message">
                <i class="fa-solid fa-basket-shopping empty-icon" style="font-size:3.5rem; display:block; margin-bottom:1rem; opacity:0.2;"></i>
                <p>Your culinary tray is currently empty.</p>
                <button class="btn btn-primary btn-sm close-drawer-jump" style="margin-top:1rem;" onclick="triggerCartSidebarToggle(false)">Browse Menu Grid</button>
            </div>
        `;
        if(cartDrawerFooter) cartDrawerFooter.style.display = "none";
    } else {
        if(cartDrawerFooter) cartDrawerFooter.style.display = "block";
        
        AUTOMATED_GLOBAL_CART.forEach(cartItem => {
            const rowUnit = document.createElement('div');
            rowUnit.className = "cart-item-row";
            
            let imgFallback = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=150&q=80";
            
            rowUnit.innerHTML = `
                <img src="${cartItem.product.image}" alt="${cartItem.product.name}" class="cart-item-thumb" onerror="this.src='${imgFallback}'">
                <div class="cart-item-meta">
                    <h4>${cartItem.product.name}</h4>
                    <span class="unit-p">PKR ${cartItem.product.price}</span>
                    <div class="quantity-controller">
                        <button class="qty-btn" onclick="adjustCartItemQuantityNode('${cartItem.product.id}', -1)">-</button>
                        <span class="qty-val">${cartItem.quantity}</span>
                        <button class="qty-btn" onclick="adjustCartItemQuantityNode('${cartItem.product.id}', 1)">+</button>
                    </div>
                </div>
                <div class="cart-item-right">
                    <span class="item-total-p">PKR ${cartItem.product.price * cartItem.quantity}</span>
                    <i class="fa-solid fa-trash-can item-del-btn" onclick="completelyEraseCartItemRow('${cartItem.product.id}')" title="Remove Item"></i>
                </div>
            `;
            cartDrawerBody.appendChild(rowUnit);
        });
    }
}

function triggerCartSidebarToggle(forceStateOpen) {
    if (forceStateOpen) {
        if(cartDrawerOverlay) cartDrawerOverlay.classList.add('active');
        if(cartDrawerSidebar) cartDrawerSidebar.classList.add('active');
    } else {
        if(cartDrawerOverlay) cartDrawerOverlay.classList.remove('active');
        if(cartDrawerSidebar) cartDrawerSidebar.classList.remove('active');
    }
}

/* --------------------------------------------------------------------------
   05. MULTI-CHANNEL RECEIVABLE LOGIC (CHECKOUT ENGINE ARCHITECTURE)
   -------------------------------------------------------------------------- */
function buildCheckoutInvoiceSummaryView() {
    if(!checkoutInvoiceList) return;
    checkoutInvoiceList.innerHTML = "";
    
    const subtotalAggregatedSum = AUTOMATED_GLOBAL_CART.reduce((acc, curr) => acc + (curr.product.price * curr.quantity), 0);
    
    AUTOMATED_GLOBAL_CART.forEach(cartItem => {
        const itemLineNode = document.createElement('div');
        itemLineNode.className = "invoice-item-line";
        itemLineNode.innerHTML = `
            <span>${cartItem.product.name} <strong>&times; ${cartItem.quantity}</strong></span>
            <span>PKR ${cartItem.product.price * cartItem.quantity}</span>
        `;
        checkoutInvoiceList.appendChild(itemLineNode);
    });
    
    if(invoiceSubtotal) invoiceSubtotal.innerText = `PKR ${subtotalAggregatedSum}`;
    if(invoiceGrossTotal) invoiceGrossTotal.innerText = `PKR ${subtotalAggregatedSum}`;
}

function toggleCheckoutTunnelVisibility(isVisibleFlag) {
    if (isVisibleFlag) {
        buildCheckoutInvoiceSummaryView();
        if(checkoutModal) checkoutModal.classList.add('active');
        triggerCartSidebarToggle(false); // Close background sliding drawer element block
    } else {
        if(checkoutModal) checkoutModal.classList.remove('active');
    }
}

// 06. WHATSAPP SINGLE QUICK ITEM ORDER PRE-FILLED STRING STREAM
function triggerDirectItemWhatsAppFulfillment(itemId) {
    const selectedItem = TOUQAS_MENU_DATABASE.find(p => p.id === itemId);
    if (!selectedItem) return;
    
    const targetBusinessWhatsAppNumber = "923079308372"; // Core business target destination number configuration
    const structuredPrefilledMessageString = `Hello TOUQAS FOODS! 🌟%0A%0AI want to place a quick instant order from your brand landing page website for this masterpiece dish:%0A%0A--- CULINARY ITEM CORNER ---%0A🍔 Dish Name: ${selectedItem.name}%0A🔢 Quantity: 1 unit%0A💰 Price Valuation: PKR ${selectedItem.price}%0A%0A"good food, great living"%0A%0APlease process this item transaction sequence now. Thank you!`;
    
    const generationUrlStringTarget = `https://wa.me/${targetBusinessWhatsAppNumber}?text=${structuredPrefilledMessageString}`;
    window.open(generationUrlStringTarget, '_blank');
}

// 07. WHOLE BASKET TRANSACTION ROUTER (PAYLOAD DISTRIBUTION ENGINE CONTROL)
function finalizeWholeCartPayloadDistribution(formEvent) {
    formEvent.preventDefault();
    
    if(AUTOMATED_GLOBAL_CART.length === 0) {
        alert("Your selection tray is totally depleted. Cannot compile payload arrays.");
        return;
    }
    
    // Extract bound form user variables input metrics
    const enteredName = document.getElementById('custName').value;
    const enteredEmail = document.getElementById('custEmail').value;
    const enteredPhone = document.getElementById('custPhone').value;
    const enteredWhatsApp = document.getElementById('custWhatsApp').value;
    const enteredAddress = document.getElementById('custAddress').value;
    const selectedCity = document.getElementById('custCity').value;
    const selectedOrderType = document.getElementById('custOrderType').value;
    const enteredNotes = document.getElementById('custNotes').value || "None provided";
    const selectedPaymentChannel = document.querySelector('input[name="paymentOption"]:checked').value;
    
    const baseTotalInvoiceCost = AUTOMATED_GLOBAL_CART.reduce((acc, curr) => acc + (curr.product.price * curr.quantity), 0);
    const calculatedLoyaltyTokensEarned = Math.floor(baseTotalInvoiceCost / 200);
    const uniqueOrderTransactionHash = `TF-2026-${Math.floor(100000 + Math.random() * 900000)}`;
    
    // Compile ordered lists lines items text strings grids
    let structuralInvoiceTextLinesBlock = "";
    AUTOMATED_GLOBAL_CART.forEach((cartItem, arrayIndex) => {
        structuralInvoiceTextLinesBlock += `${arrayIndex + 1}) ${cartItem.product.name} [x${cartItem.quantity}] -> PKR ${cartItem.product.price * cartItem.quantity}%0A`;
    });
    
    // OPTION A: ENHANCED WHATSAPP COMMERCIAL MESSAGE FORMATTING
    const targetWhatsAppEndpointNumber = "923079308372";
    const masterFormattedWhatsAppPayloadString = `🔥 *NEW ORDER INCOMING - TOUQAS FOODS* 🔥%0A%0A*Order Transaction Token ID:* \`${uniqueOrderTransactionHash}\`%0A----------------------------------------%0A%0A📦 *SELECTED DISHES LIST MATRIX:*%0A${structuralInvoiceTextLinesBlock}%0A💰 *Gross Financial Invoice Subtotal:* PKR ${baseTotalInvoiceCost}%0A✨ *Loyalty Wallet System Points Earned:* ${calculatedLoyaltyTokensEarned} Pts%0A%0A----------------------------------------%0A👥 *LOGISTICS USER CREDENTIALS SECTION:*%0A👤 *Client Name:* ${enteredName}%0A📞 *Voice Contact:* ${enteredPhone}%0A💬 *WhatsApp Node:* ${enteredWhatsApp}%0A📧 *Secure Email:* ${enteredEmail}%0A📍 *Physical Shipping Address:* ${enteredAddress}, ${selectedCity}%0A🚚 *Fulfillment Class Mode:* ${selectedOrderType}%0A💳 *Selected Payment Node:* ${selectedPaymentChannel}%0A📝 *Kitchen Notes:* _${enteredNotes}_%0A%0A----------------------------------------%0A*Tagline:* _good food, great living_%0A%0A✅ _Please verify this transaction dataset inside the local administrative control hub cluster panel view._`;
    
    // Trigger window open payload streaming
    const finalCompiledWhatsAppNavigationUrl = `https://wa.me/${targetWhatsAppEndpointNumber}?text=${masterFormattedWhatsAppPayloadString}`;
    
    /* ========================================================================
       DEVELOPER INTEGRATION DIRECTIVES HOOKS FOR SYSTEM UPGRADES:
       ========================================================================
       
       OPTION B: DEVELOPER WEB INFRASTRUCTURE EMAIL CONDUITS (EmailJS Engine)
       ------------------------------------------------------------------------
       To hook this data stream up directly to email servers, remove comments below:
       
       const emailParametersPayload = {
           order_id: uniqueOrderTransactionHash,
           customer_name: enteredName,
           customer_email: enteredEmail,
           customer_phone: enteredPhone,
           delivery_address: enteredAddress,
           city_region: selectedCity,
           logistics_type: selectedOrderType,
           payment_method: selectedPaymentChannel,
           invoice_total: baseTotalInvoiceCost,
           items_ordered_text: structuralInvoiceTextLinesBlock.replace(/%0A/g, "\n"),
           kitchen_instructions: enteredNotes
       };
       
       emailjs.send("YOUR_EMAILJS_SERVICE_ID", "YOUR_EMAILJS_TEMPLATE_KEY", emailParametersPayload)
              .then(response => console.log("Email server accepted payload indices stream", response))
              .catch(error => console.error("Email conduit crashed", error));
              
       OPTION C: DEVELOPER REALTIME GOOGLE SHEETS MANAGEMENT SYSTEM CORE
       ------------------------------------------------------------------------
       To automatically inject these fields row-by-row into online spreadsheets:
       
       fetch("https://script.google.com/macros/s/YOUR_APPS_SCRIPT_DEPLOYMENT_ID/exec", {
           method: "POST",
           mode: "no-cors",
           headers: { "Content-Type": "application/json" },
           body: JSON.stringify(emailParametersPayload)
       });
       
       OPTION D: DIGITAL TRANSACTION ONLINE GATEWAY ACQUIRERS (Easypaisa/JazzCash)
       ------------------------------------------------------------------------
       If (selectedPaymentChannel === "Easypaisa" || selectedPaymentChannel === "JazzCash") {
          // 1. Initialise payload payment tokens redirection via local proxy servers
          // 2. Route user directly to banking transaction interfaces securely
          // 3. Capture return callback webhook variables to update local administration order panels statuses
       }
    */
    
    // Execute structural feedback actions to customer
    alert(`Touqas Secure Fulfillment Core Engine has compiled the transaction parameters!\n\nOrder Reference: ${uniqueOrderTransactionHash}\n\nClick OK to route this structured order directly into our WhatsApp Operations Queue Dashboard Node.`);
    
    window.open(finalCompiledWhatsAppNavigationUrl, '_blank');
    
    // Clear Local Memory allocations to secure inventory loop rules
    clearWholeBasketTray();
    toggleCheckoutTunnelVisibility(false);
}

/* --------------------------------------------------------------------------
   08. REVEAL ANIMATIONS ENGINE, STICKY NAV ACTIONS, INITIALIZATION SCRIPTS
   -------------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
    // 1. Initialize Default Full Main Menu rendering sequence
    executeMenuCardRendering("all");
    
    // 2. Setup Category Navigation Tabs Click Monitors
    if(menuTabs) {
        menuTabs.addEventListener('click', (event) => {
            if (!event.target.classList.contains('menu-tab-btn')) return;
            
            // Toggle Active visual selectors classes
            document.querySelectorAll('.menu-tab-btn').forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
            
            // Push matching category filter tokens
            const requestedCategory = event.target.getAttribute('data-category');
            executeMenuCardRendering(requestedCategory);
        });
    }
    
    // 3. Synchronize Cart Sliding System Overlay Listeners
    if(cartTrigger) cartTrigger.addEventListener('click', () => triggerCartSidebarToggle(true));
    if(cartCloseBtn) cartCloseBtn.addEventListener('click', () => triggerCartSidebarToggle(false));
    if(cartDrawerOverlay) cartDrawerOverlay.addEventListener('click', () => triggerCartSidebarToggle(false));
    if(emptyCartBtn) emptyCartBtn.addEventListener('click', clearWholeBasketTray);
    if(goToCheckoutBtn) goToCheckoutBtn.addEventListener('click', () => toggleCheckoutTunnelVisibility(true));
    if(checkoutCloseBtn) checkoutCloseBtn.addEventListener('click', () => toggleCheckoutTunnelVisibility(false));
    
    // 4. Bind Submission Handlers on Form Elements Structure
    if(touqasOrderForm) touqasOrderForm.addEventListener('submit', finalizeWholeCartPayloadDistribution);
    
    // 5. Sticky Header and Floating Back-to-Top Toggle Monitor On Scroll
    const mainHeaderNode = document.querySelector('.main-header');
    const backToTopBtn = document.getElementById('backToTopBtn');
    
    window.addEventListener('scroll', () => {
        if(window.scrollY > 80) {
            if(mainHeaderNode) mainHeaderNode.classList.add('scrolled');
            if(backToTopBtn) backToTopBtn.classList.add('active');
        } else {
            if(mainHeaderNode) mainHeaderNode.classList.remove('scrolled');
            if(backToTopBtn) backToTopBtn.classList.remove('active');
        }
        
        // Active Scroll Spy Section Navigation Link Indicators Trackers
        const visibleSectionBlocks = document.querySelectorAll('section');
        const navigationLinksList = document.querySelectorAll('.nav-link');
        
        let focusSectionId = "";
        visibleSectionBlocks.forEach(sec => {
            const boundaryTopOffset = sec.offsetTop - 120;
            const absoluteHeight = sec.offsetHeight;
            if(window.scrollY >= boundaryTopOffset && window.scrollY < (boundaryTopOffset + absoluteHeight)) {
                focusSectionId = sec.getAttribute('id');
            }
        });
        
        navigationLinksList.forEach(link => {
            link.classList.remove('active');
            if(link.getAttribute('href') === `#${focusSectionId}`) {
                link.classList.add('active');
            }
        });
    });
    
    if(backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    // 6. Mobile Interactive Menu Toggle Logic
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');
    
    if(hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburgerBtn.classList.toggle('active');
        });
        
        // Close overlay if mobile navigational link is targeted
        navMenu.addEventListener('click', (ev) => {
            if(ev.target.classList.contains('nav-link')) {
                navMenu.classList.remove('active');
                hamburgerBtn.classList.remove('active');
            }
        });
    }

    // 7. Interactive Administrative Dashboard Tab Click Swapping Mechanism
    const adminTabsList = document.querySelectorAll('.admin-tab');
    const adminContentPanelsList = document.querySelectorAll('.admin-content-panel');
    
    adminTabsList.forEach(tab => {
        tab.addEventListener('click', () => {
            adminTabsList.forEach(t => t.classList.remove('active'));
            adminContentPanelsList.forEach(p => p.classList.remove('active'));
            
            tab.classList.add('active');
            const targetPanelId = tab.getAttribute('data-panel');
            const targetPanelNode = document.getElementById(targetPanelId);
            if(targetPanelNode) targetPanelNode.classList.add('active');
        });
    });

    // 8. Custom Checkout Radio Card Highlighting Control
    const paymentRadioOptionCards = document.querySelectorAll('.pay-method-card');
    paymentRadioOptionCards.forEach(card => {
        const radioInput = card.querySelector('input[type="radio"]');
        if(radioInput) {
            card.addEventListener('click', () => {
                paymentRadioOptionCards.forEach(c => c.classList.remove('active'));
                card.add
                card.classList.add('active');
                radioInput.checked = true;
            });
        }
    });

    // 9. Mock Customer Search Tracer Framework Trigger
    const trackBtn = document.getElementById('trackBtn');
    const trackingInput = document.getElementById('trackingInput');
    const currentStatusText = document.getElementById('currentStatusText');
    const etaText = document.getElementById('etaText');
    
    if(trackBtn && trackingInput) {
        trackBtn.addEventListener('click', () => {
            const enteredSearchToken = trackingInput.value.trim().toUpperCase();
            if(enteredSearchToken === "") {
                alert("Please type a valid order ID syntax.");
                return;
            }
            
            // Execute simulated dynamic tracking stage alterations matching text strings parameters
            currentStatusText.innerText = "Order Dispatched / En Route";
            currentStatusText.className = "status-badge pulse";
            currentStatusText.style.backgroundColor = "rgba(204,164,59,0.15)";
            currentStatusText.style.color = "var(--gold-light)";
            if(etaText) etaText.innerText = "12 Mins remaining (Rider Speed Stabilized)";
            
            const progressLineBarNode = document.querySelector('.timeline-progress-line');
            if(progressLineBarNode) progressLineBarNode.style.width = "75%";
            
            const stepNodes = document.querySelectorAll('.timeline-step');
            if(stepNodes.length >= 5) {
                stepNodes[0].className = "timeline-step completed";
                stepNodes[1].className = "timeline-step completed";
                stepNodes[2].className = "timeline-step completed";
                stepNodes[3].className = "timeline-step completed";
                stepNodes[4].className = "timeline-step active";
            }
            
            alert(`Simulation Node Updated! Database loaded for reference string: ${enteredSearchToken}. Tracking coordinates synchronized.`);
        });
    }
});
