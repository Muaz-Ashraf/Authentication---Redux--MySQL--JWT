import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

import {
	ListItemText,
	Collapse,
	Divider,
	ListItem,
	List,
	Typography,
	Stack,
	IconButton,
	Icon,
	Avatar,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

import { ArrowBack } from "@mui/icons-material";

function SidebarItem({
	depthStep = 10,
	depth = 0,
	item,
	expandedItems,
	setExpandedItems,
	close,
	isMobile,
	...rest
}) {
	const handleClick = () => setExpandedItems(isExpanded ? "" : name);
	const { pathname } = useLocation();
	const { name, label, childs, route } = item;

	const isExpanded = expandedItems.includes(name);

	let expandIcon;

	if (childs) {
		expandIcon = isExpanded ? (
			<ExpandLessIcon
				className={`sidebar-item-expand-arrow sidebar-item-expand-arrow-expanded`}
			/>
		) : (
			<ExpandMoreIcon className="sidebar-item-expand-arrow" />
		);
	}

	return (
		<>
			<ListItem
				onClick={handleClick}
				sx={{
					borderBottom: depth * depthStep ? "" : "1px solid #3474ac",
					cursor: "pointer",
				}}
				{...rest}
			>
				<div style={{ paddingLeft: depth * depthStep }}>
					<ListItemText
						title={label}
						primary={
							<Typography
								noWrap={true}
								fontSize={15}
							>
								{label}
							</Typography>
						}
					/>
				</div>
				{expandIcon}
			</ListItem>
			<Collapse
				in={isExpanded}
				timeout={300}
			>
				{childs && (
					<List
						disablePadding
						dense
						sx={{ bgcolor: "#3474ac" }}
					>
						{childs.map((subItem, index) => (
							<React.Fragment key={`${subItem.name}${index}`}>
								{subItem === "divider" ? (
									<Divider />
								) : (
									<SidebarItem
										depth={depth + 1}
										depthStep={depthStep}
										item={subItem}
										expandedItems={expandedItems}
										setExpandedItems={setExpandedItems}
										close={close}
										isMobile={isMobile}
									/>
								)}
							</React.Fragment>
						))}
					</List>
				)}
			</Collapse>
		</>
	);
}

function Sidebar({ items, depthStep, depth, isMobile, toggleDrawer }) {
	const [expandedItems, setExpandedItems] = useState([]);

	return (
		<>
			<List dense>
				{items.map((sidebarItem, index) => (
					<React.Fragment key={`${sidebarItem.name}${index}`}>
						{sidebarItem === "divider" ? (
							<Divider style={{ margin: "6px 0" }} />
						) : (
							<SidebarItem
								depthStep={depthStep}
								depth={depth}
								item={sidebarItem}
								expandedItems={expandedItems}
								setExpandedItems={setExpandedItems}
								label={sidebarItem.label}
								close={toggleDrawer}
								isMobile={isMobile}
							/>
						)}
					</React.Fragment>
				))}
			</List>
		</>
	);
}

export default Sidebar;
