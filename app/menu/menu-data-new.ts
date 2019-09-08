import { Item } from './../item.model';

export var burgersData: Map<string, Item> = new Map( [
    ["burgerKaiser", (new Item("Cheese Burger", "", "$7.00"))],
    ["burgerSub", (new Item("Cheese Burger", "", "$11.00"))],
    ["burgerDeluxeKaiser", (new Item("Cheese Burger Deluxe", "w/ lettuce, tomato, raw onion", "$8.00"))],
    ["burgerDeluxeSub", (new Item("Cheese Burger Deluxe", "w/ lettuce, tomato, raw onion", "$12.00"))],
    ["burgerBarrettaKaiser", (new Item("Barretta Cheese Burger", "w/ green peppers, mushrooms, fried onion", "$8.00"))],
    ["burgerBarrettaSub", (new Item("Barretta Cheese Burger", "w/ green peppers, mushrooms, fried onion", "$12.00"))],
    ["burgerSupremeKaiser", (new Item("Cheese Burger Supreme", "w/ green peppers, mushrooms, fried onions, lettuce, tomato", "$9.00"))],
    ["burgerSupremeSub", (new Item("Cheese Burger Supreme", "w/ green peppers, mushrooms, fried onions, lettuce, tomato", "$13.00"))],
    ["burgerDomenicoKaiser", (new Item("Domenico Cheese Burger", "w/ bacon & bleu cheese", "$9.00"))],
    ["burgerDomenicoSub", (new Item("Domenico Cheese Burger", "w/ bacon & bleu cheese", "$14.00"))],
    ["burgerPizzaKaiser", (new Item("Pizza Burger", "", "$10.00"))],
    ["burgerPizzaSub", (new Item("Pizza Burger", "", "$14.00"))],
    ["burgerPizzaPepKaiser", (new Item("Pizza Burger", "w/ pepperoni", "$11.00"))],
    ["burgerPizzaPepSub", (new Item("Pizza Burger", "w/ pepperoni", "$15.00"))]
] );

export var pizzaData: Map<string, any> = new Map( [
    ["tomatoPieSic", 
                    {
                        name: "Sicilian tomato pie with sauce", 
                        price: "$18.00"
                    }
    ],
    ["tomatoPieRound", 
                    {
                        name: "Large round tomato pie with sauce", 
                        price: "$13.00"
                    }
    ],
    ["margherita", 
                    {
                        name: "Large Margherita with fresh mozzarella & marinara sauce", 
                        price: "$19.00"
                    }
    ],
    ["small", 
                    { 
                        price: "$8.00",
                        extras: "$1.00",
                        priceSm: "8.0",
                        extrasSm: "1.0"
                    }
    ],
    ["medium", 
                    {
                        price: "$11.00",
                        extras: "$2.00",
                        priceSm: "11.0",
                        extrasSm: "2.0"
                    }
    ],
    ["large", 
                    {
                        price: "$13.00",
                        extras: "$3.00",
                        priceSm: "13.0",
                        extrasSm: "3.0"
                    }
    ],
    ["gluten-free", 
                    {
                        price: "$15.00",
                        extras: "$2.00",
                        priceSm: "15.0",
                        extrasSm: "2.0"
                    }
    ],
    ["sicilian", 
                    {
                        price: "$18.00",
                        extras: "$3.00",
                        priceSm: "18.0",
                        extrasSm: "3.0"
                    }
    ],
    ["veggie", 
                    {
                        small: "$11.00",
                        medium: "$17.00",
                        large: "$22.00",
                        sicilian: "$27.00",
                        smallSm: "11.0",
                        mediumSm: "17.0",
                        largeSm: "22.0",
                        sicilianSm: "27.0"
                    }
    ],
    ["meat", 
                    {
                        small: "$11.00",
                        medium: "$17.00",
                        large: "$22.00",
                        sicilian: "$27.00",
                        smallSm: "11.0",
                        mediumSm: "17.0",
                        largeSm: "22.0",
                        sicilianSm: "27.0"
                    }
    ],
    ["white", 
                    {
                        small: "$11.00",
                        medium: "$17.00",
                        large: "$22.00",
                        sicilian: "$27.00",
                        smallSm: "11.0",
                        mediumSm: "17.0",
                        largeSm: "22.0",
                        sicilianSm: "27.0"
                    }
    ],
    ["rustica", 
                    {
                        small: "$11.00",
                        medium: "$17.00",
                        large: "$22.00",
                        sicilian: "$27.00",
                        smallSm: "11.0",
                        mediumSm: "17.0",
                        largeSm: "22.0",
                        sicilianSm: "27.0"
                    }
    ],
    ["buffalo", 
                    {
                        small: "$12.00",
                        medium: "$19.00",
                        large: "$25.00",
                        sicilian: "$30.00",
                        smallSm: "12.0",
                        mediumSm: "19.0",
                        largeSm: "25.0",
                        sicilianSm: "30.0"
                    }
    ],
    ["meatveggie", 
                    {
                        small: "$14.00",
                        medium: "$21.00",
                        large: "$28.00",
                        sicilian: "$33.00",
                        smallSm: "14.0",
                        mediumSm: "21.0",
                        largeSm: "28.0",
                        sicilianSm: "33.0"
                    }
    ],
] );

export var appetizerData: Item[] = [
    new Item("Chicken Quesadilla", "", "$12.00"),
    new Item("Broccoli Bites (12)", "", "$10.00"),
    new Item("Breaded Calamari (12)", "", "$10.00"),
    new Item("Breaded Mushrooms (15)", "", "$10.00"),
    new Item("Mozzarella Stix (6)", "", "$10.00"),
    new Item("Mussels", "with wine & garlic or marinara sauce", "$14.00"),
    new Item("Clams", "with wine & garlic", "$16.00"),
    new Item("Bread Stix (12)", "with mozzarella & sauce", "$12.00"),
    new Item("Pizza Fries", "with sauce, bacon & mozzarella", "$9.00"),
    new Item("Shrimp Basket", "with French Fries", "$11.00"),
    new Item("Chicken Fingers (4)", "with French Fries", "$11.00"),
    new Item("Fried Dough (12)", "with sugar", "$9.00"),
    new Item("Buffalo Chicken Fingers (4)", "with fries", "$11.00")
];

export var sideOrderData: Item[] = [
    new Item("Garlic Bread", "", "$5.00"),
    new Item("Garlic Bread", "with mozzarella", "$6.00"),
    new Item("French Fries", "", "$4.00"),
    new Item("French Fries", "with old bay", "$5.00"),
    new Item("French Fries", "with mozzarella", "$6.00"),
    new Item("Broccoli", "", "$5.00"),
    new Item("Broccoli", "with mozzarella", "$6.00"),
    new Item("Onion Rings", "", "$6.00"),
    new Item("Broccoli di Rabe", "", "$8.00"),
    new Item("Meat Roll", "", "$5.00"),
    new Item("Veggie Roll", "", "$5.00"),
    new Item("Spinach", "with garlic & olio di olive", "$7.00"),   
    new Item("Garlic Knots (6)", "", "$5.00"),
    new Item("Garlic Knots (12)", "", "$9.00") 
];

export var soupData: Item[] = [
    new Item("Cup", "", "$5.00"),
    new Item("Bowl", "", "$7.00"),
    new Item("Pint to go", "", "$6.00"),
    new Item("Quart to go", "", "$10.00")
];

export var saladData: Item[] = [
    new Item("Large Dinner Salad", "", "$8.00"),
    new Item("Dinner Salad", "", "$5.00"),
    new Item("Caesar Salad", "", "$5.00"),
    new Item("Chef's Salad", "with ham, provolone & turkey", "$11.00"),
    new Item("Tuna Salad", "with provolone", "$11.00"),
    new Item("Antipasto", "with ham, provolone, salami & capicollo", "$11.00"),
    new Item("Barretta Salad", "with roast beef, turkey, & provolone", "$11.00"),
    new Item("Crispy Buffalo Chicken Salad", "", "$12.00"),
    new Item("Grilled Chicken Salad", "", "$12.00"),
    new Item("Grilled Chicken Caesar Salad", "", "$12.00"),
    new Item("Domenico Salad", "with sharp provolone & sopressata", "$15.00"),
    new Item("Giovanna Salad", "with prosciutto di parma & bocconcini di mozzarella", "$16.00"),
    new Item("Italian Tuna Salad", "with provolone", "$15.00"),
    new Item("Spinach Salad", "with egg, bacon, feta cheese", "$12.00"), 
    new Item("Grilled Shrimp Salad (6)", "", "$15.00"),
    new Item("Add Shrimp (each)", "", "$1.50"),
    new Item("Add Chicken", "", "$5.00"),
    new Item("Add Anchovies", "", "$2.00"),
    new Item("Add Scoop Tuna", "", "$4.00"),
    new Item("Add Fresh Mozzarella", "", "$5.00")
];

export var childrenData: Item[] = [
    new Item("Pasta", "with butter", "$7.00"),
    new Item("Pasta", "with tomato sauce", "$7.00"),
    new Item("Pasta", "with marinara sauce", "$8.00"),
    new Item("Pasta", "with 1 meatball", "$8.00"),
    new Item("Pasta", "with meat sauce", "$9.00"),
    new Item("Ravioli (3)", "with tomato sauce", "$9.00"),
    new Item("Grilled Cheese", "", "$5.00"),
    new Item("1/4 Pound Hot Dog", "", "$5.00"),
    new Item("1/4 Pound Hot Dog", "with mozzarella", "$6.00"),
    new Item("2 Meatballs", "", "$4.00"),
    new Item("2 Sausages", "", "$5.00"),
    new Item("1 Breaded Flounder", "with French fries", "$10.00"),
    new Item("2 Chicken Fingers", "with French fries", "$8.00"),
    new Item("Add Meat Sauce", "", "$3.00"),
    new Item("Gnocchi", "", "$10.00"),
    new Item("Pasta Barretta", "", "$12.00"),
    new Item("Pc. Chicken Fingers", "", "$3.00")
];

export var entreesData: Item[] = [
    new Item("Veal Parmigiana", "with pasta", "$24.00"),
    new Item("Veal Pizzaiola", "with pasta, marinara sauce, olives & mushrooms", "$24.00"),
    new Item("Chicken Cacciatore", "with pasta, marinara sauce, peppers & mushrooms", "$19.00"),
    new Item("Chicken Parmigiana", "with pasta", "$19.00"),
    new Item("Grilled Chicken Alfredo", "with pasta", "$19.00"),
    new Item("Grilled Chicken Breast in Garlic Sauce", "with pasta", "$19.00"),
    new Item("Shrimp Scampi", "with pasta, 8 shrimp in olive oil & garlic", "$24.00"),
    new Item("Breaded Flounder (2)", "with French fries", "$19.00"),
    new Item("Eggplant Parmigiana", "with pasta", "$18.00"),
    new Item("Stuffed Eggplant", "with ricotta & side of pasta", "$19.00"),
    new Item("Add Extra Cheese", "", "$3.00"),
    new Item("Add Spinach", "", "$4.00"),
    new Item("Add Piece Eggplant", "", "$2.00"),
    new Item("Add Vodka Sauce", "", "$6.00")
];

export var pastaDinnerData: Item[] = [
    new Item("Pasta", "with (2) meatballs or (2) sausage", "$13.00"),
    new Item("Pasta", "with marinara sauce", "$13.00"),
    new Item("Pasta Campagnola", "with marinara sauce, mushrooms, roasted peppers & broccoli", "$15.00"),
    new Item("Pasta", "with clam sauce (red or white)", "$21.00"),
    new Item("Pasta", "with mussel sauce (red)", "$19.00"),
    new Item("Pasta", "with aglio & olio (hot)", "$13.00"),
    new Item("Pasta", "with aglio & olio, olives, capers & anchovies", "$16.00"),
    new Item("Pasta", "with alfredo sauce", "$15.00"),
    new Item("Pasta", "with alfredo sauce, ricotta & broccoli", "$17.00"),
    new Item("Pasta", "with meat sauce", "$16.00"),
    new Item("Pasta Barretta", "with a blend of alfredo and meat sauce", "$18.00"),
    new Item("Shrimp Fra Diavolo", "with 8 shrimp in a spicy marinara sauce", "$22.00"),
    new Item("Pasta Primavera", "with garlic, oil, green peppers, spinach & broccoli", "$15.00"),
    new Item("Pasta Al Pomodoro", "with a sauce made from fresh tomatoes, garlic & olio di olive", "$16.00"),
    new Item("Cheese Tortellini", "with alfredo sauce", "$18.00"),
    new Item("Pasta Pescatore", "with Mussels, clams & 5 shrimp in marinara sauce", "$28.00"),
    new Item("Pasta Alfredo", "with 8 shrimp", "$24.00"),
    new Item("Substitute Gluten Free Pasta", "", "$4.00")
];

export var bakedPastaData: Item[] = [
    new Item("Ravioli (6)", "", "$15.00"),
    new Item("Gnocchi di Patate", "", "$15.00"),
    new Item("Penne Al Forno", "", "$15.00"),
    new Item("Penne Al Forno", "with ricotta & meat sauce", "$18.00"),
    new Item("Manicotti (2)", "", "$15.00"),
    new Item("Meat Lasagna", "", "$18.00"),
    new Item("Add Ravioli (each)", "", "$2.00"),
    new Item("Add Barretta Sauce", "", "$5.00")
];

export var hotWrapsData: Item[] = [
    new Item("Grilled Chicken", "with lettuce, tomato & caesar dressing", "$10.00"),
    new Item("Grilled Buffalo Chicken", "with hot sauce & bleu cheese", "$10.00"),
    new Item("Crispy Chicken", "with lettuce, tomato & ranch dressing", "$10.00"),
    new Item("Add Bacon", "", "$2.00"),
    new Item("Add Cheese", "", "$2.00")
];

export var glutenFreeShortData: Item[] = [
    new Item("Ravioli", "", "$18.00"),
    new Item("Gnocchi", "", "$18.00"),
    new Item("Pizza with cheese", "", "$15.00")
];

export var hotSubsData: Item[] = [
    new Item("Buffalo Cheese Steak", "with bleu cheese & hot sauce", "$11.00"),
    new Item("Cheese Steak", "", "$10.00"),
    new Item("Chicken Cheese Steak", "", "$10.00"),
    new Item("Cheese Steak Deluxe", "with lettuce, tomato, raw onions", "$11.00"),
    new Item("Barretta Cheese Steak", "with fried onions, mushrooms, green peppers", "$11.00"),
    new Item("Cheese Steak Supreme", "with lettuce, tomato, fried onions, mushrooms, green peppers", "$12.00"),
    new Item("Pizza Steak", "", "$11.00"),
    new Item("Pizza Steak", "with pepperoni", "$12.00"),
    new Item("Meatball Parmigiana", "", "$9.00"),
    new Item("Breaded Flounder Sub", "", "$13.00"),
    new Item("Sausage Parmigiana", "with green peppers & fried onions", "$11.00"),
    new Item("Chicken Parmigiana", "", "$12.00"),
    new Item("Eggplant Parmigiana", "", "$10.00"),
    new Item("Chicken Sub", "with lettuce, tomato, raw onion & your choice of grilled or breaded chicken", "$12.00"),
    new Item("Grilled Veggies Sub", "with fried onions, green peppers, mushrooms, tomato, olives, garlic with cheese", "$11.00"),
    new Item("Veal Parmigiana", "", "$14.00"),
    new Item("Peppers, Eggs & Cheese Sub", "", "$12.00"),
    new Item("Broccoli Rabe & Cheese Sub", "", "$14.00")
];

export var hotSubsAddonData: Item[] = [
    new Item("Bacon", "", "$2.00"),
    new Item("Extra Cheese", "", "$2.00"),
    new Item("Broccoli Rabe", "", "$4.00"),
    new Item("Pepperoni", "", "$2.00"),
    new Item("Extra Meat", "", "$4.00"),
    new Item("Mushrooms", "", "$2.00"),
    new Item("Sharp Provolone", "", "$3.00"),
    new Item("Xtra Long Hots", "", "$1.50")
];

export var coldSubsData: Item[] = [
    new Item("Roast Beef & Provolone", "", "$10.00"),
    new Item("Turkey & Provolone", "", "$10.00"),
    new Item("Ham & Provolone", "", "$10.00"),
    new Item("Tuna & Provolone", "", "$10.00"),
    new Item("Mixed Cheese", "with American & Provolone cheese", "$10.00"),
    new Item("Italian", "with ham, salami, capicollo & Provolone cheese", "$10.00"),
    new Item("American", "with ham, salami & American cheese", "$10.00"),
    new Item("Prosciutto & sharp provolone", "", "$16.00"),
    new Item("Italian tuna & sharp provolone", "", "$16.00"),
    new Item("Sopressata & mozzarella", "", "$16.00")
];

export var domenicosBestData: Item[] = [
    new Item("Domenico's Best", `The Ultimate Sandwich. Made and cooked fresh (enough for two). 
                  With marinara sauce, peppers, garlic, olio di oliva & stuffed
                  with prosciutto di parma, sharp provolone, bocconcini di mozzarella
                  & sopressata`, "$30.00")
];

export var sandwichesData: Item[] = [
    new Item("Roast Beef & Provolone", "", "$8.00"),
    new Item("Turkey & Provolone", "", "$8.00"),
    new Item("Ham & Provolone", "", "$8.00"),
    new Item("Tuna & Provolone", "", "$8.00"),
    new Item("Mixed Cheese", "with American & Provolone cheese", "$8.00"),
    new Item("Italian", "with ham, salami, capicollo & Provolone cheese", "$8.00"),
    new Item("American", "with ham, salami & American cheese", "$8.00"),
    new Item("Breaded Chicken Filet", "", "$10.00"),
    new Item("Grilled Chicken Filet", "", "$10.00"),
    new Item("Grilled Chicken Filet", "with mushrooms & Caesar dressing", "$10.00"),
    new Item("Breaded Flounder", "", "$10.00")
];

export var stromboliData: Item[] = [
    new Item("Medium", "", "$11.00"),
    new Item("Large", "", "$18.00"),
    new Item("Italian (medium)", "", "$14.00"),
    new Item("Italian (large)", "", "$23.00"),
    new Item("Extra topping (on a medium)", "", "$2.00"),
    new Item("Extra topping (on a large)", "", "$3.00")
];

export var calzoneData: Item[] = [
    new Item("Medium", "", "$11.00"),
    new Item("Large", "", "$18.00"),
    new Item("Extra topping (on a medium)", "", "$2.00"),
    new Item("Extra topping (on a large)", "", "$3.00")
];

export var beveragesData: Item[] = [
    new Item("Espresso", "", "$2.50"),
    new Item("Double Espresso", "", "$3.50"),
    new Item("Fountain Soda 24 oz.", "", "$2.50"),
    new Item("Milk", "24 oz. cup", "$3.00"),
    new Item("Chocolate Milk", "24 oz. cup", "$3.50"),
    new Item("Coffee", "regular or decaf", "$2.50"),
    new Item("Hot Tea", "regular or decaf", "$2.50"),
    
];

export var dessertsData: Item[] = [
    new Item("Large Cannoli Vanilla", "", "$5.50"),
    new Item("Flute Limoncello", "", "$9.00"),
    new Item("New York Style Cheese Cake", "", "$7.00"),
    new Item("Coppa Caffe", "", "$9.00"),
    new Item("Coppa Spagnola", "", "$9.00"),
    new Item("Flourless Chocolate Cake", "", "$7.00"),
    new Item("Torta Della Nonna", "", "$7.00"),
    new Item("Bomba", "", "$9.00"),
    new Item("Tiramisu Cup", "", "$7.00"),
    new Item("Mini Melts", "", "$4.00")
];

export var aLaCarteData: Item[] = [
    new Item("Barretta Fries", "Ranch, Mozzarella, Bacon", "$10.00"),
    new Item("Specialty Chicken", "", "$25.00"),
    new Item("Bruschetta", "", "$8.00"),
    new Item("Mixed Munchies", "(5) Mozzarella Stix, (8) Broccoli Bites, (8) Breaded Mushrooms", "$22.00"),
    new Item("Insalata Caprese Pomodori & Mozzarella", "", "$15.00"),
    new Item("Sauteed Mushroom", "with prosciutto", "$16.00"),
    new Item("Roasted Pepper", "with Sharp Provolone", "$15.00"),
    new Item("Porchetta Sub", "on a sub roll", "$11.00"),
    new Item("Porchetta Sandwich", "on a kaiser roll", "$10.00"),
    new Item("Cobb Salad", "with ham, chicken, feta, bacon, eggs, lettuce, tomato, onions, croutons", "$16.00"),
    new Item("Pasta Carbonara", "", "$19.00"),
    new Item("Pasta Ala Vodka", "", "$22.00"),
    new Item("Arancini (2)", "Meat, Sauce, Peas", "$13.00"),
    new Item("Arancini (2)", "Sausage, Broccoli Rabe, Provolone", "$13.00"),
    new Item("Paccheri Alla Carne", "", "$25.00"),
    new Item("Pappardelle", "Al Prosciutto & Formaggio", "$25.00")
];