"use client";

import { motion } from "motion/react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FloatingOrderButton from "../../components/FloatingOrderButton";

const MenuItem = ({ item, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="flex justify-between items-baseline group py-3 border-b border-gray-100 last:border-0"
        >
            <div className="flex-1 pr-8">
                <div className="flex items-center gap-2">
                    <h3
                        className="text-lg font-medium text-gray-900 group-hover:text-[#9ACD32] transition-colors duration-300"
                        style={{ fontFamily: "Outfit, sans-serif" }}
                    >
                        {item.name}
                    </h3>
                    {item.isVegetarian && (
                        <span title="Vegetarian" className="text-[#9ACD32]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-leaf"
                            >
                                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                            </svg>
                        </span>
                    )}
                </div>
                {item.description && (
                    <p
                        className="text-gray-500 text-sm mt-1 font-light leading-relaxed"
                        style={{ fontFamily: "Outfit, sans-serif" }}
                    >
                        {item.description}
                    </p>
                )}
            </div>
            <div className="shrink-0">
                <span
                    className="text-lg font-medium text-gray-900"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                >
                    {item.price}
                </span>
            </div>
        </motion.div>
    );
};

export default function MenuPage() {
    const menuCategories = [
        {
            title: "BEVERAGES",
            items: [
                { name: "Espresso", price: "$3.50" },
                { name: "Turkish Coffee", price: "$5.00" },
                { name: "Coffee", price: "$4.00" },
                { name: "Americano", price: "$4.50" },
                { name: "Latte", price: "$5.00" },
                { name: "Mocha", price: "$5.50" },
                { name: "Iced Coffee", price: "$5.00" },
                { name: "Hot Chocolate", price: "$5.00" },
                {
                    name: "CHAI LATTE",
                    description: "Matcha with steamed milk of your choice.",
                    price: "$5.50 +",
                },
                { name: "Latte", price: "$3.69" },
                { name: "Sahlep", price: "$3.79" },
                { name: "Mocha", price: "$3.69" },
                { name: "Espresso", price: "$3.49" },
                { name: "Americano", price: "$4.29" },
                { name: "Cappuccino", price: "$4.49" },
                { name: "Perrier Sprinkling Mineral Water", price: "$2.50" },
                { name: "San Pellegrino", price: "$2.25" },
                { name: "Poland Spring", price: "$1.50" },
                { name: "TEA", price: "$3.75" },
            ],
        },
        {
            title: "Organic Turkish Drinks",
            items: [
                {
                    name: "Sahlep",
                    description: "Hot drink made from orchid root. Strengthens immunity.",
                    price: "$4.99",
                },
                {
                    name: "Boza",
                    description:
                        "Special for the holiday season. Creamy, high in fiber, B vitamins, and probiotics. Made of millets and topped with cinnamon. Served at room temperature to preserve probiotic content.",
                    price: "$4.99",
                },
            ],
        },
        {
            title: "Smoothies",
            items: [
                {
                    name: "Constantinople signature smoothie",
                    description: "Turkish coffee, banana, date, and choice of milk.",
                    price: "$9.99 +",
                },
                {
                    name: "Ephesus signature smoothie",
                    description:
                        "Sahlep: organic orchid root, banana, cinnamon, oats, dates and choice of milk",
                    price: "$9.99 +",
                },
                {
                    name: "Apple pie smoothie",
                    description:
                        "Apples, bananas, cinnamon, maple syrup, Greek yogurt and choice of milk",
                    price: "$9.49 +",
                },
                {
                    name: "Peach pie smoothie",
                    description:
                        "Peaches, cinnamon, honey, oats, vanilla extract and choice of milk",
                    price: "$9.49 +",
                },
                {
                    name: "Green Smoothie",
                    description:
                        "Kale, spinach, avocado, pineapples, ginger, honey and choice of milk",
                    price: "$9.49 +",
                },
                {
                    name: "Very berry smoothie",
                    description:
                        "Raspberries, Blackberries, strawberries, greek yogurt, choice of milk, and honey/maple syrup if desired",
                    price: "$9.49 +",
                },
                {
                    name: "Caramel peanut smoothie",
                    description:
                        "Bananas, caramel, peanut butter, greek yogurt and choice of milk.",
                    price: "$9.49 +",
                },
                {
                    name: "Peppermint mocha Smoothie",
                    description:
                        "Espresso, Banana, cocoa powder, peppermint and choice of milk",
                    price: "$9.49 +",
                },
            ],
        },
        {
            title: "Breakfast",
            items: [
                {
                    name: "Sultana's Egg and Cheese Stuffed Baked Potato",
                    description: "Stuffed baked potato with egg and cheese.",
                    price: "$12.99 +",
                },
                {
                    name: "Sultana's Bacon Egg and Cheese Stuffed Baked Potato",
                    description: "Egg and cheese stuffed baked potato with green onions.",
                    price: "$12.99",
                },
                {
                    name: "Sultana's Ham Egg and Cheese Stuffed Baked Potato",
                    description: "with green onions.",
                    price: "$12.99",
                },
                {
                    name: "Sultana's Veggies Stuffed Baked Potato",
                    description:
                        "Egg and cheese stuffed baked potato with spinach, tomatoes, green onions, red and green pepper.",
                    price: "$12.99",
                    isVegetarian: true,
                },
                {
                    name: "Veggie and Cheese Muffin",
                    price: "$4.49",
                    isVegetarian: true,
                },
                {
                    name: "Oatmeal Chocolate Chip Muffin",
                    price: "$3.99",
                },
                {
                    name: "Mixed Fruit Muffin",
                    price: "$3.99",
                },
                {
                    name: "Mini Lorraine Quiche",
                    description: "Cheddar cheese, bacon and onion.",
                    price: "$8.99",
                },
                {
                    name: "Mini Ham and Sausage Quiche",
                    description: "Parmesan and cheddar cheese, green onion and parsley.",
                    price: "$8.99",
                },
                {
                    name: "Mini Spinach and Feta Quiche",
                    description: "Parmesan cheese and mushroom.",
                    price: "$8.99",
                    isVegetarian: true,
                },
            ],
        },
        {
            title: "Savories",
            items: [
                {
                    name: "Acma With Cream Cheese, Butter and Jelly",
                    price: "$6.99",
                    isVegetarian: true,
                },
                {
                    name: "Feta and Olives Acma Sandwich",
                    description: "Green and red bell peppers, olive paste and tomatoes.",
                    price: "$11.99",
                    isVegetarian: true,
                },
                {
                    name: "Caprice Acma Sandwich",
                    description: "Fresh mozzarella cheese, basil and tomatoes.",
                    price: "$11.99",
                    isVegetarian: true,
                },
                {
                    name: "Hazelnut Dreams Acma Sandwich",
                    description: "Nutella spread, bananas and strawberries.",
                    price: "$11.99",
                    isVegetarian: true,
                },
                {
                    name: "Turkey Egg and Cheese Acma Sandwich",
                    price: "$12.99",
                },
                {
                    name: "Bacon Egg and Cheese Acma Sandwich",
                    price: "$12.99",
                },
                {
                    name: "Ham Egg and Cheese Acma Sandwich",
                    price: "$12.99",
                },
                {
                    name: "Spinach Cheese Borek",
                    price: "$11.99",
                    isVegetarian: true,
                },
                {
                    name: "Potato Borek",
                    price: "$11.99",
                    isVegetarian: true,
                },
                {
                    name: "Chicken Borek",
                    price: "$11.99",
                    isVegetarian: true,
                },
                {
                    name: "Lentil Borek",
                    price: "$11.99",
                },
                {
                    name: "Eggplant Borek",
                    price: "$11.99",
                },
                {
                    name: "Meat Borek",
                    description: "Ground beef, onion and spices.",
                    price: "$11.99",
                },
                {
                    name: "Mozzarella Cheese Pogaca",
                    price: "$6.99",
                },
                {
                    name: "Sausage Pogaca",
                    price: "$6.99",
                },
                {
                    name: "Olive Pogaca",
                    price: "$6.99",
                },
                {
                    name: "Meat Pogaca",
                    description: "Ground beef with onion and spices.",
                    price: "$6.99",
                },
            ],
        },
        {
            title: "Soup",
            items: [
                {
                    name: "Lemon Chicken Rice",
                    price: "$7.99",
                },
                {
                    name: "Green Lentil",
                    price: "$7.99",
                    isVegetarian: true,
                },
                {
                    name: "Clam Chowder",
                    price: "$7.99",
                },
                {
                    name: "Creamy Broccoli",
                    price: "$7.99",
                    isVegetarian: true,
                },
            ],
        },
        {
            title: "Salads",
            items: [
                {
                    name: "Beet and Goat Cheese Salad",
                    description:
                        "Walnuts, mixed baby greens and aragula. Served with balsamic vinaigrette.",
                    price: "$14.99 +",
                    isVegetarian: true,
                },
                {
                    name: "Fattoush Salad",
                    description:
                        "Feta cheese, romaine lettuce, onion, fresh mint and parsley, sun flower seeds, tomato, cucumber, red bell pepper, kalamata olives and pita chips served with house made mediterranean salad dressing.",
                    price: "$15.99 +",
                    isVegetarian: true,
                },
                {
                    name: "Corn and Black Beans Salad",
                    description:
                        "Avocado, red bell pepper, cherry tomatoes, green onions and fresh cilantro. Served with lime vinaigrette.",
                    price: "$14.99 +",
                    isVegetarian: true,
                },
                {
                    name: "Quinoa Salad",
                    description:
                        "Mozzarella cheese balls, fresh basil, cherry tomatoes. Served with rice wine vinaigrette.",
                    price: "$15.99 +",
                    isVegetarian: true,
                },
                {
                    name: "Cobb Salad",
                    description:
                        "Goat cheese, bacon, eggs, dried cranberries, pecan, apple, pear lettuce. Served with house made blue cheese or ranch dressing.",
                    price: "$15.99 +",
                },
                {
                    name: "Avocado Caesar Salad",
                    description:
                        "Shaved parmesan, cheese, avocado, lettuce and croutons. Served with house made caesar dressing.",
                    price: "$14.99 +",
                },
                {
                    name: "Mozzarella and Pesto Salad",
                    description:
                        "Fresh mozzarella with pesto sauce, mixed greens with tomatoes and red onions.",
                    price: "$14.99 +",
                    isVegetarian: true,
                },
                {
                    name: "Small Garden Salad",
                    description: "Mesclun and arugula with seasonal vegetables.",
                    price: "$9.99 +",
                    isVegetarian: true,
                },
            ],
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            <Header />

            <main className="pt-32 pb-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-20"
                    >
                        <h1
                            className="text-5xl md:text-7xl font-light text-black mb-6 tracking-[0.02em]"
                            style={{ fontFamily: "Outfit, sans-serif" }}
                        >
                            Our <span className="font-medium">Menu</span>
                        </h1>
                        <p
                            className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto font-light tracking-wide"
                            style={{ fontFamily: "Outfit, sans-serif" }}
                        >
                            Authentic flavors, fresh ingredients, and recipes made with love.
                        </p>
                    </motion.div>

                    <div className="space-y-24">
                        {menuCategories.map((category, categoryIndex) => (
                            <section
                                key={categoryIndex}
                                id={category.title.toLowerCase().replace(/\s+/g, "-")}
                            >
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6 }}
                                    className="mb-10 flex items-center gap-4"
                                >
                                    <h2
                                        className="text-3xl md:text-4xl font-medium text-black tracking-wide"
                                        style={{ fontFamily: "Outfit, sans-serif" }}
                                    >
                                        {category.title}
                                    </h2>
                                    <div className="h-px bg-[#9ACD32] flex-1 opacity-50"></div>
                                </motion.div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
                                    {category.items.map((item, itemIndex) => (
                                        <MenuItem key={itemIndex} item={item} index={itemIndex} />
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
            <FloatingOrderButton />
        </div>
    );
}
