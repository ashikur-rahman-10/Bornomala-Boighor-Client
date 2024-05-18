import logo from "../assets/logo.png"
import { Link, NavLink, Outlet } from "react-router-dom";
import {
    FaBars,
    FaBook,
    FaClipboardList,
    FaHome,
    FaUserSecret,
    FaUsers,
    FaBookOpen,
    FaWallet,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import CustomLoader from "../Components/CustomLoader/CustomLoader";
import useAuth from "../Hooks/UseAuth";
import UseAdmin from "../Hooks/UseAdmin";
import { BiSolidBookAdd } from "react-icons/bi";

const Dashboard = () => {
    const { user, loading } = useAuth();
    if (loading) {
        return <CustomLoader></CustomLoader>;
    }
    const { admin } = UseAdmin();

    let navOptions;

    if (admin) {
        navOptions = (
            <>
                <li>
                    <NavLink className={"w-64  mx-auto mb-1"} to={"add-book"}>
                        <BiSolidBookAdd></BiSolidBookAdd> Add Book
                    </NavLink>
                </li>
                <li>
                    <NavLink className={"w-64  mx-auto"} to={"manage-books"}>

                        <FaClipboardList></FaClipboardList> Manage Books
                    </NavLink>
                </li>
            </>
        );
    }


    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });

    return (
        <div>
            <Helmet>
                <title>Bornomala | Dashboaard</title>
            </Helmet>
            <div className="drawer drawer-mobile lg:drawer-open ">
                <input
                    id="my-drawer-2"
                    type="checkbox"
                    className="drawer-toggle"
                />

                <label
                    htmlFor="my-drawer-2"
                    className="p-3 text-2xl top-0 w-full bg-green-500 opacity-20 absolute z-20 drawer-button lg:hidden"
                >
                    <FaBars className="text-white"></FaBars>
                </label>
                <div className="drawer-content pt-10 md:pt-0">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side h-screen w-80">
                    <label
                        htmlFor="my-drawer-2"
                        className="drawer-overlay "
                    ></label>
                    <ul className="menu  lg:p-4 pt-12  w-80 min-h-full bg-base-200 text-base-content">
                        <Link to={"/"} className="w-full ml-12 mt-3 mb-6">
                            <img className="w-28" src={logo} alt="" />
                        </Link>
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ rotate: 360, scale: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                            }}
                        >
                            {navOptions}
                        </motion.div>
                        <div className="divider"></div>
                        <li>
                            <NavLink className={"w-64  mx-auto"} to={"/"}>
                                <FaHome></FaHome> Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={"w-64  mx-auto"} to={"/books"}>
                                <FaBook></FaBook> Books
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={"w-64  mx-auto"} to={"/classes"}>
                                <FaBook></FaBook> Classes
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
