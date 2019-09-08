import { Item } from './../item.model';

export var burgersData: Map<string, Item> = new Map( [
    ["burgerKaiser", (new Item("Cheese Burger", "", "$6.00"))],
    ["burgerSub", (new Item("Cheese Burger", "", "$9.99"))],
    ["burgerDeluxeKaiser", (new Item("Cheese Burger Deluxe", "w/ lettuce, tomato, raw onion", "$6.50"))],
    ["burgerDeluxeSub", (new Item("Cheese Burger Deluxe", "w/ lettuce, tomato, raw onion", "$10.99"))],
    ["burgerBarrettaKaiser", (new Item("Barretta Cheese Burger", "w/ green peppers, mushrooms, fried onion", "$7.50"))],
    ["burgerBarrettaSub", (new Item("Barretta Cheese Burger", "w/ green peppers, mushrooms, fried onion", "$11.50"))],
    ["burgerSupremeKaiser", (new Item("Cheese Burger Supreme", "w/ green peppers, mushrooms, fried onions, lettuce, tomato", "$7.50"))],
    ["burgerSupremeSub", (new Item("Cheese Burger Supreme", "w/ green peppers, mushrooms, fried onions, lettuce, tomato", "$11.50"))],
    ["burgerDomenicoKaiser", (new Item("Domenico Cheese Burger", "w/ bacon & bleu cheese", "$7.50"))],
    ["burgerDomenicoSub", (new Item("Domenico Cheese Burger", "w/ bacon & bleu cheese", "$12.50"))],
    ["burgerPizzaKaiser", (new Item("Pizza Burger", "", "$9.00"))],
    ["burgerPizzaSub", (new Item("Pizza Burger", "", "$10.50"))],
    ["burgerPizzaPepKaiser", (new Item("Pizza Burger", "w/ pepperoni", "$9.50"))],
    ["burgerPizzaPepSub", (new Item("Pizza Burger", "w/ pepperoni", "$11.50"))]
] );


export var pizzaData: Map<string, any> = new Map( [
    ["tomatoPieSic", 
                    {
                        name: "Sicilian tomato pie with sauce", 
                        price: "$16.00"
                    }
    ],
    ["tomatoPieRound", 
                    {
                        name: "Large round tomato pie with sauce", 
                        price: "$11.00"
                    }
    ],
    ["margherita", 
                    {
                        name: "Large Margherita with fresh mozzarella & marinara sauce", 
                        price: "$17.00"
                    }
    ],
    ["small", 
                    { 
                        price: "$7.00",
                        extras: "$1.00",
                        priceSm: "7.0",
                        extrasSm: "1.0"
                    }
    ],
    ["medium", 
                    {
                        price: "$10.00",
                        extras: "$1.50",
                        priceSm: "10.0",
                        extrasSm: "1.5"
                    }
    ],
    ["large", 
                    {
                        price: "$12.00",
                        extras: "$2.50",
                        priceSm: "12.00",
                        extrasSm: "2.5"
                    }
    ],
    ["gluten-free", 
                    {
                        price: "$12.00",
                        extras: "$1.50",
                        priceSm: "12.00",
                        extrasSm: "1.5"
                    }
    ],
    ["sicilian", 
                    {
                        price: "$16.00",
                        extras: "$2.50",
                        priceSm: "16.00",
                        extrasSm: "2.5"
                    }
    ],
    ["veggie", 
                    {
                        small: "$10.00",
                        medium: "$14.50",
                        large: "$19.50",
                        sicilian: "$23.50",
                        smallSm: "10.0",
                        mediumSm: "14.5",
                        largeSm: "19.5",
                        sicilianSm: "23.5"
                    }
    ],
    ["meat", 
                    {
                        small: "$10.00",
                        medium: "$14.50",
                        large: "$19.50",
                        sicilian: "$23.50",
                        smallSm: "10.0",
                        mediumSm: "14.5",
                        largeSm: "19.5",
                        sicilianSm: "23.5"
                    }
    ],
    ["white", 
                    {
                        small: "$10.00",
                        medium: "$14.50",
                        large: "$19.50",
                        sicilian: "$23.50",
                        smallSm: "10.0",
                        mediumSm: "14.5",
                        largeSm: "19.5",
                        sicilianSm: "23.5"
                    }
    ],
    ["rustica", 
                    {
                        small: "$10.00",
                        medium: "$14.50",
                        large: "$19.50",
                        sicilian: "$23.50",
                        smallSm: "10.0",
                        mediumSm: "14.5",
                        largeSm: "19.5",
                        sicilianSm: "23.5"
                    }
    ],
    ["buffalo", 
                    {
                        small: "$11.00",
                        medium: "$16.00",
                        large: "$22.00",
                        sicilian: "$26.00",
                        smallSm: "11.0",
                        mediumSm: "16.0",
                        largeSm: "22.0",
                        sicilianSm: "26.0"
                    }
    ],
    ["meatveggie", 
                    {
                        small: "$13.00",
                        medium: "$19.00",
                        large: "$27.00",
                        sicilian: "$31.00",
                        smallSm: "13.0",
                        mediumSm: "19.0",
                        largeSm: "27.0",
                        sicilianSm: "31.0"
                    }
    ],
] );

export var appetizerData: Item[] = [
    new Item("Chicken Quesadilla", "", "$10.99"),
    new Item("Broccoli Bites", "", "$8.99"),
    new Item("Breaded Calamari", "", "$8.99"),
    new Item("Breaded Mushrooms (15)", "", "$8.99"),
    new Item("Mozzarella Stix (6)", "", "$8.99"),
    new Item("Mussels", "with wine & garlic or marinara sauce", "$12.99"),
    new Item("Clams", "with wine & garlic", "$14.99"),
    new Item("Bread Stix (12)", "with mozzarella & sauce", "$9.99"),
    new Item("Pizza Fries", "with sauce, bacon & mozzarella", "$7.50"),
    new Item("Shrimp Basket", "with French Fries", "$9.50"),
    new Item("Chicken Fingers (4)", "with French Fries", "$9.50"),
    new Item("Fried Dough (12)", "with sugar", "$6.99"),
    new Item("Buffalo Chicken Fingers (4)", "", "$9.50")
];

export var sideOrderData: Item[] = [
    new Item("Garlic Bread", "", "$4.00"),
    new Item("Garlic Bread", "with mozzarella", "$5.50"),
    new Item("French Fries", "", "$3.50"),
    new Item("French Fries", "with old bay", "$3.99"),
    new Item("French Fries", "with mozzarella", "$4.99"),
    new Item("Broccoli", "", "$4.00"),
    new Item("Broccoli", "with mozzarella", "$5.25"),
    new Item("Onion Rings", "", "$4.99"),
    new Item("Broccoli di Rabe", "", "$7.50"),
    new Item("Meat Roll", "", "$3.99"),
    new Item("Veggie Roll", "", "$3.99"),
    new Item("Spinach", "with garlic & olio di olive", "$5.99"),   
    new Item("Garlic Knots (6)", "", "$3.99"),
    new Item("Garlic Knots (12)", "", "$6.99") 
];

export var soupData: Item[] = [
    new Item("Cup", "", "$4.50"),
    new Item("Bowl", "", "$6.50"),
    new Item("Pint to go", "", "$4.99"),
    new Item("Quart to go", "", "$8.99")
];

export var saladData: Item[] = [
    new Item("Large Dinner Salad", "", "$6.99"),
    new Item("Dinner Salad", "", "$4.99"),
    new Item("Caesar Salad", "", "$4.99"),
    new Item("Chef's Salad", "with ham, provolone & turkey", "$9.99"),
    new Item("Tuna Salad", "with provolone", "$9.99"),
    new Item("Antipasto", "with ham, provolone, salami & capicollo", "$9.99"),
    new Item("Crispy Buffalo Chicken Salad", "", "$10.99"),
    new Item("Grilled Chicken Salad", "", "$10.99"),
    new Item("Grilled Chicken Caesar Salad", "", "$10.99"),
    new Item("Domenico Salad", "with sharp provolone & sopressata", "$13.99"),
    new Item("Giovanna Salad", "with prosciutto di parma & bocconcini di mozzarella", "$14.99"),
    new Item("Italian Tuna Salad", "with provolone", "$12.99"),
    new Item("Spinach Salad", "with egg, bacon, feta cheese", "$9.99"), 
    new Item("Grilled Shrimp Salad (6)", "", "$12.99"),
    new Item("Add Shrimp (each)", "", "$1.50"),
    new Item("Add Chicken", "", "$5.00")
];

export var childrenData: Item[] = [
    new Item("Pasta", "with butter", "$6.50"),
    new Item("Pasta", "with tomato sauce", "$6.50"),
    new Item("Pasta", "with 1 meatball", "$7.50"),
    new Item("Pasta", "with meat sauce", "$7.50"),
    new Item("Pasta", "with tomato sauce", "$8.50"),
    new Item("Ravioli (3)", "", "$8.50"),
    new Item("Grilled Cheese", "", "$4.50"),
    new Item("1/4 Pound Hot Dog", "", "$4.25"),
    new Item("1/4 Pound Hot Dog", "with mozzarella", "$4.99"),
    new Item("2 Meatballs", "", "$3.00"),
    new Item("2 Sausages", "", "$4.00"),
    new Item("1 Breaded Flounder", "with French fries", "$8.99"),
    new Item("2 Chicken Fingers", "with French fries", "$6.99"),
    new Item("Add Meat Sauce", "", "$2.00")
];

export var entreesData: Item[] = [
    new Item("Veal Parmigiana", "with pasta", "$19.00"),
    new Item("Veal Pizzaiola", "with pasta, marinara sauce, olives & mushrooms", "$19.00"),
    new Item("Chicken Cacciatore", "with pasta, marinara sauce, peppers & mushrooms", "$17.00"),
    new Item("Chicken Parmigiana", "with pasta", "$17.00"),
    new Item("Grilled Chicken Alfredo", "with pasta", "$17.00"),
    new Item("Grilled Chicken Breast in Garlic Sauce", "with pasta", "$17.00"),
    new Item("Shrimp Scampi", "with pasta, 8 shrimp in olive oil & garlic", "$20.00"),
    new Item("Breaded Flounder (2)", "with French fries", "$18.00"),
    new Item("Eggplant Parmigiana", "with pasta", "$15.00"),
    new Item("Stuffed Eggplant", "with ricotta & side of pasta", "$17.00")
];

export var pastaDinnerData: Item[] = [
    new Item("Pasta", "with (2) meatballs or (2) sausage", "$11.50"),
    new Item("Pasta", "with marinara sauce", "$11.50"),
    new Item("Pasta Campagnola", "with marinara sauce, mushrooms, roasted peppers & broccoli", "$13.50"),
    new Item("Pasta", "with clam sauce (red or white)", "$18.99"),
    new Item("Pasta", "with mussel sauce (red)", "$16.99"),
    new Item("Pasta", "with aglio & olio (hot)", "$11.50"),
    new Item("Pasta", "with aglio & olio, olives, capers & anchovies", "$13.50"),
    new Item("Pasta", "with alfredo sauce", "$13.50"),
    new Item("Pasta", "with alfredo sauce, ricotta & broccoli", "$15.50"),
    new Item("Pasta", "with meat sauce", "$13.50"),
    new Item("Pasta Barretta", "with a blend of alfredo and meat sauce", "$14.50"),
    new Item("Shrimp Fra Diavolo", "with 8 shrimp in a spicy marinara sauce", "$19.99"),
    new Item("Pasta Primavera", "with garlic, oil, green peppers, spinach & broccoli", "$13.50"),
    new Item("Pasta Al Pomodoro", "with a sauce made from fresh tomatoes, garlic & olio di olive", "$13.99"),
    new Item("Cheese Tortellini", "with alfredo sauce", "$14.99"),
    new Item("Pasta Pescatore", "with Mussels, clams & 5 shrimp in marinara sauce", "$23.99")
];

export var bakedPastaData: Item[] = [
    new Item("Ravioli (6)", "", "$13.50"),
    new Item("Gnocchi di Patate", "", "$13.50"),
    new Item("Penne Al Forno", "", "$12.99"),
    new Item("Penne Al Forno", "with ricotta & meat sauce", "$14.99"),
    new Item("Manicotti (2)", "", "$13.50"),
    new Item("Meat Lasagna", "", "$14.99")
];

export var hotWrapsData: Item[] = [
    new Item("Grilled Chicken", "with lettuce, tomato & caesar dressing", "$9.50"),
    new Item("Grilled Buffalo Chicken", "with hot sauce & bleu cheese", "$9.50"),
    new Item("Crispy Chicken", "with lettuce, tomato & ranch dressing", "$9.50"),
    new Item("Add Bacon", "", "$1.25"),
    new Item("Add Cheese", "", "$1.25")
];

export var glutenFreeShortData: Item[] = [
    new Item("Ravioli", "", "$15.50"),
    new Item("Gnocchi", "", "$16.99"),
    new Item("Sandwiches", "", "$9.75-$12.49"),
    new Item("Pizza with cheese", "", "$12.00")
];

export var hotSubsData: Item[] = [
    new Item("Buffalo Cheese Steak", "with bleu cheese & hot sauce", "$9.99"),
    new Item("Cheese Steak", "", "$8.99"),
    new Item("Chicken Cheese Steak", "", "$8.99"),
    new Item("Cheese Steak Deluxe", "with lettuce, tomato, raw onions", "$9.50"),
    new Item("Barretta Cheese Steak", "with fried onions, mushrooms, green peppers", "$9.75"),
    new Item("Cheese Steak Supreme", "with lettuce, tomato, fried onions, mushrooms, green peppers", "$10.25"),
    new Item("Pizza Steak", "", "$9.50"),
    new Item("Pizza Steak", "with pepperoni", "$10.50"),
    new Item("Meatball Parmigiana", "", "$8.50"),
    new Item("Breaded Flounder Sub", "", "$11.99"),
    new Item("Sausage Parmigiana", "with green peppers & fried onions", "$9.50"),
    new Item("Chicken Parmigiana", "", "$10.99"),
    new Item("Eggplant Parmigiana", "", "$8.99"),
    new Item("Chicken Sub", "with lettuce, tomato, raw onion & your choice of grilled or breaded chicken", "$10.99"),
    new Item("Grilled Veggies Sub", "with fried onions, green peppers, mushrooms, tomato, olives, garlic with cheese", "$9.99"),
    new Item("Veal Parmigiana", "", "$11.99"),
    new Item("Peppers, Eggs & Cheese Sub", "", "$10.99"),
    new Item("Broccoli Rabe & Cheese Sub", "", "$10.99")
];

export var hotSubsAddonData: Item[] = [
    new Item("Bacon", "", "$1.25"),
    new Item("Extra Cheese", "", "$1.25"),
    new Item("Broccoli Rabe", "", "$3.00"),
    new Item("Extra Meat", "", "$3.50"),
    new Item("Mushrooms", "", "$1.00"),
    new Item("Sharp Provolone", "", "$2.00")
];

export var coldSubsData: Item[] = [
    new Item("Roast Beef & Provolone", "", "$9.50"),
    new Item("Turkey & Provolone", "", "$9.50"),
    new Item("Ham & Provolone", "", "$9.50"),
    new Item("Tuna & Provolone", "", "$9.50"),
    new Item("Mixed Cheese", "with American & Provolone cheese", "$9.50"),
    new Item("Italian", "with ham, salami, capicollo & Provolone cheese", "$9.50"),
    new Item("American", "with ham, salami & American cheese", "$9.50"),
    new Item("Prosciutto & sharp provolone", "", "$15.00"),
    new Item("Italian tuna & sharp provolone", "", "$15.00"),
    new Item("Sopressata & mozzarella", "", "$15.00")
];

export var domenicosBestData: Item[] = [
    new Item("Domenico's Best", `The Ultimate Sandwich. Made and cooked fresh (enough for two). 
                  With marinara sauce, peppers, garlic, olio di oliva & stuffed
                  with prosciutto di parma, sharp provolone, bocconcini di mozzarella
                  & sopressata`, "$24.00")
];

export var sandwichesData: Item[] = [
    new Item("Roast Beef & Provolone", "", "$7.25"),
    new Item("Turkey & Provolone", "", "$7.25"),
    new Item("Ham & Provolone", "", "$7.25"),
    new Item("Tuna & Provolone", "", "$7.25"),
    new Item("Mixed Cheese", "with American & Provolone cheese", "$7.25"),
    new Item("Italian", "with ham, salami, capicollo & Provolone cheese", "$7.25"),
    new Item("American", "with ham, salami & American cheese", "$7.25"),
    new Item("Breaded Chicken Filet", "", "$9.50"),
    new Item("Grilled Chicken Filet", "", "$9.50"),
    new Item("Grilled Chicken Filet", "with mushrooms & Caesar dressing", "$9.99"),
    new Item("Breaded Flounder", "", "$9.50")
];

export var stromboliData: Item[] = [
    new Item("Medium", "", "$10.00"),
    new Item("Large", "", "$16.00"),
    new Item("Italian (medium)", "", "$12.00"),
    new Item("Italian (large)", "", "$19.00"),
    new Item("Extra topping (on a medium)", "", "$1.50"),
    new Item("Extra topping (on a large)", "", "$2.50")
];

export var calzoneData: Item[] = [
    new Item("Medium", "", "$10.00"),
    new Item("Large", "", "$16.00"),
    new Item("Extra topping (on a medium)", "", "$1.50"),
    new Item("Extra topping (on a large)", "", "$2.50")
];

export var beveragesData: Item[] = [
    new Item("Espresso", "", "$1.75"),
    new Item("Double Espresso", "", "$2.50"),
    new Item("Fountain Soda 22 oz. (free refill)", "", "$1.99"),
    new Item("Bottle Soda", "", "$1.99"),
    new Item("Bottle Juice", "", "$2.50"),
    new Item("Bottle Water", "", "$1.99"),
    new Item("One Liter Bottle Mineral Water", "", "$4.50"),
    new Item("Two Liter Soda", "", "$3.25"),
    new Item("Sanpellegrino (Imported soda)", "", "$2.50"),
    new Item("Milk (22 oz. cup)", "", "$2.50"),
    new Item("Chocolate Milk (22 oz. cup)", "", "$3.00"),
    new Item("Coffee (free refill)", "", "$1.99"),
    new Item("Hot Tea (regular or decaf)", "", "$1.99"),
    new Item("60 oz. Pitcher Fountain Soda", "", "$4.99 (refill: 1.99)")
];

export var dessertsData: Item[] = [
    new Item("Large Cannoli Vanilla", "", "$4.99"),
    new Item("Large Cannoli Chocolate", "", "$5.50"),
    new Item("Small Cannoli Vanilla", "", "$2.50"),
    new Item("Small Cannoli Chocolate", "", "$3.00"),
    new Item("Flute Limoncello", "", "$8.00"),
    new Item("New York Style Cheese Cake", "", "$6.50"),
    new Item("Orange Ripieno", "", "$8.00"),
    new Item("Coppa Caffe", "", "$8.00"),
    new Item("Coppa Spagnola", "", "$8.00"),
    new Item("Flourless Chocolate Cake", "", "$6.50"),
    new Item("Torta Della Nonna", "", "$6.50"),
    new Item("Cappuccino Truffle", "", "$6.50"),
    new Item("Peach Ripieno", "", "$8.00"),
    new Item("Lemon Ripieno", "", "$8.00"),
    new Item("Orange Ripieno", "", "$8.00"),
    new Item("Limoncello Truffle", "", "$6.50"),
    new Item("Bomba", "", "$8.00"),
    new Item("Tiramisu Cup", "", "$6.50"),
    new Item("Ricotta Cheese Cake", "", "$6.50")
];