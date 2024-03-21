import React from "react";
import BookByCategory from "./BookByCategory/BookByCategory";
import banner from "../../assets/banner1.jpg";
import Hero from "./Hero/Hero";
import Publications from "./Publications/Publications";
import Writers from "./Writers/Writers";
import AllBooks from "./AllBooks/AllBooks";
import BestSellerBook from "./BestSellerBook.jsx/BestSellerBook";

const Home = () => {
    return (
        <div>
            <div className="">
                <Hero></Hero>
            </div>

            <h1 className="text-center pt-8 text-xl text-green-600 ">
                ক্যাটাগরি সমুহ
            </h1>
            <BookByCategory></BookByCategory>
            <BestSellerBook></BestSellerBook>
            <AllBooks></AllBooks>
            <Publications></Publications>
            <Writers></Writers>
        </div>
    );
};

export default Home;
