import { Typography } from "@mui/material";
import Nav from "./Nav";
import Page from "./Page";
import { motion } from "framer-motion";

const User = () => {
	return (
		<>
			<Nav />
			<Page>
				<motion.div
					initial={{ scale: 0, translateX: 600 }}
					animate={{ translateX: 0, scale: 1 }}
					transition={{
						type: "spring",
						stiffness: 300,
						damping: 50,
					}}
				>
					<Typography fontSize="5rem">User Panel</Typography>
				</motion.div>
			</Page>
		</>
	);
};

export default User;
