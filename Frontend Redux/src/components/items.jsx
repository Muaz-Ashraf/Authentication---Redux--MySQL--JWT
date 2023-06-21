import { Home } from "@mui/icons-material";

export const items = [
	{
		name: "Dashboard",
		label: "Dashboard",
		route: "/",
	},
	//Catalogue ============================================================================================
	{
		name: "Catalogue",
		label: "Catalogue",

		parent: true,

		childs: [
			{
				name: "Dashboard",
				label: "Dashboard",
				route: "/Catalogue/Dashboard",
			},
			{
				name: "Catalogue Configurations",
				label: "Catalogue Configurations",

				parent: true,

				childs: [
					{
						name: "Department Category",
						label: "Department Category",
						route: "/Catalogue/Catalogue-Configurations/Department-Category",
					},
					{
						name: "Department",
						label: "Department",
						route: "/Catalogue/Catalogue-Configurations/Department",
					},
					{
						name: "Natural Account",
						label: "Natural Account",
						route: "/Catalogue/Catalogue-Configurations/Natural-Account",
					},
					{
						name: "Main Category",
						label: "Main Category",
						route: "/Catalogue/Catalogue-Configurations/Main-Category",
					},
					{
						name: "Sub Category",
						label: "Sub Category",
						route: "/Catalogue/Catalogue-Configurations/Sub-Category",
					},
					{
						name: "Type",
						label: "Type",
						route: "/Catalogue/Catalogue-Configurations/Type",
					},
					{
						name: "Form",
						label: "Form",
						route: "/Catalogue/Catalogue-Configurations/Form",
					},
					{
						name: "Unit",
						label: "Unit",
						route: "/Catalogue/Catalogue-Configurations/Unit",
					},
					{
						name: "Generic Name",
						label: "Generic Name",
						route: "/Catalogue/Catalogue-Configurations/Generic-Name",
					},

					{
						name: "Manufacturer",
						label: "Manufacturer",
						route: "/Catalogue/Catalogue-Configurations/Manufacturer",
					},
					{
						name: "Disease",
						label: "Disease",
						route: "/Catalogue/Catalogue-Configurations/Disease",
					},
					{
						name: "Strength Unit",
						label: "Strength Unit",
						route: "/Catalogue/Catalogue-Configurations/Strength-Unit",
					},
					{
						name: "Special Condition",
						label: "Special Condition",
						route: "/Catalogue/Catalogue-Configurations/Special-Condition",
					},
					{
						name: "Expense Code",
						label: "Expense Code",
						route: "/Catalogue/Catalogue-Configurations/Expense-Code",
					},
					{
						name: "FA Owned Accounts",
						label: "FA Owned Accounts",
						route: "/Catalogue/Catalogue-Configurations/FA-Owned-Accounts",
					},
					{
						name: "FA Clearing Accounts",
						label: "FA Clearing Accounts",
						route: "/Catalogue/Catalogue-Configurations/FA-Clearing-Accounts",
					},
				],
			},
			{
				name: "Medical Catalogue Departments",
				label: "Medical Catalogue Departments",
				route: "/Catalogue/Medical-Catalogue-Departments",
			},

			{
				name: "Material Catalogue Departments",
				label: "Material Catalogue Departments",
				route: "/Catalogue/Material-Catalogue-Departments",
			},
		],
	},

	//Inventory =================================================================
	{
		name: "Inventory",
		label: "Inventory",

		parent: true,

		childs: [
			{
				name: "Inventory Configurations",
				label: "Inventory Configurations",

				parent: true,
				childs: [
					{
						name: "Inventory Receiving",
						label: "Inventory Receiving",
						route: "/Inventory/Inventory Configurations/Inventory-Receiving",
					},
					{
						name: "AP Accrual",
						label: "AP Accrual",
						route: "/Inventory/Inventory Configurations/AP-Accrual",
					},
					{
						name: "Business Unit",
						label: "Business Unit",
						route: "/Inventory/Inventory Configurations/Business-Unit",
					},
					{
						name: "Inventory Cost Group",
						label: "Inventory Cost Group",
						route: "/Inventory/Inventory Configurations/Inventory-Cost-Group",
					},
					{
						name: "Inventory Cost Account",
						label: "Inventory Cost Account",
						route: "/Inventory/Inventory Configurations/Inventory-Cost-Account",
					},
					{
						name: "Inventory Cost Center",
						label: "Inventory Cost Center",
						route: "/Inventory/Inventory Configurations/Inventory-Cost-Center",
					},
					{
						name: "Inventory Expiry Configuration",
						label: "Inventory Expiry Configuration",
						route:
							"/Inventory/Inventory Configurations/Inventory-Expiry-Configuration",
					},
					{
						name: "Inventory Transactions Configurations",
						label: "Inventory Transactions Configurations",
						route:
							"/Inventory/Inventory Configurations/Inventory-Transactions-Configurations",
					},
				],
			},
			{
				name: "Inventory Operations",
				label: "Inventory Operations",

				parent: true,

				childs: [
					{
						name: "Define Inventory",
						label: "Define Inventory",
						route: "/Inventory/Inventory-Operations/Define-Inventory",
					},
					{
						name: "Good Reciept Management",
						label: "Good Reciept Management",
						route: "/Inventory/Inventory-Operations/Good-Reciept-Management",
					},
					{
						name: "Quality Management",
						label: "Quality Management",
						route: "/Inventory/Inventory-Operations/Quality-Management",
					},
					{
						name: "Issuance",
						label: "Issuance",
						route: "/Inventory/Inventory-Operations/Issuance",
					},
					{
						name: "Transactions",
						label: "Transactions",
						route: "/Inventory/Inventory-Operations/Transactions",
					},
					{
						name: "Buffer Inventory (Transactions)",
						label: "Buffer Inventory (Transactions)",
						route: "/Inventory/Inventory-Operations/Buffer-Inventory",
					},
					{
						name: "Stock Taking",
						label: "Stock Taking",
						route: "/Inventory/Inventory-Operations/Stock-Taking",
					},
					{
						name: "Items Utilization",
						label: "Items Utilization",
						route: "/Inventory/Inventory-Operations/Items-Utilization",
					},
					{
						name: "Reserved Inventory Items",
						label: "Reserved Inventory Items",
						route: "/Inventory/Inventory-Operations/Reserved-Inventory-Items",
					},

					{
						name: "Expiry Management",
						label: "Expiry Management",
						route: "/Inventory/Inventory-Operations/Expiry-Management",
					},
					{
						name: "Demand Immediate Fulfillment",
						label: "Demand Immediate Fulfillment",
						route:
							"/Inventory/Inventory-Operations/Demand-Immediate-Fulfillment",
					},
				],
			},
			{
				name: "Inventory Details",
				label: "Inventory Details",

				parent: true,
				childs: [
					{
						name: "Inventory Details",
						label: "Inventory Details",
						route: "/Inventory/Inventory-Details/Inventory-Details",
					},
					{
						name: "Blocked Inventory Items",
						label: "Blocked Inventory Items",
						route: "/Inventory/Inventory-Details/Blocked-Inventory-Items",
					},
					{
						name: "Inventory Stock Return",
						label: "Inventory Stock Return",
						route: "/Inventory/Inventory-Details/Inventory-Stock-Return",
					},
					{
						name: "Goods Receipt Return",
						label: "Goods Receipt Return",
						route: "/Inventory/Inventory-Details/Goods-Receipt-Return",
					},
				],
			},
			{
				name: "Inventory Store Accounting",
				label: "Store Accounting",

				parent: true,
				childs: [
					{
						name: "Ap. Accrual Aging Report",
						label: "Ap. Accrual Aging Report",
						route: "/Inventory/Store-Accounting/Ap-Accrual-Aging-Report",
					},
					{
						name: "Ap. Report",
						label: "Ap. Report",
						route: "/Inventory/Store-Accounting/Ap-Report",
					},
					{
						name: "Inventory Receiving Ledger",
						label: "Inventory Receiving Ledger",
						route: "/Inventory/Store-Accounting/Inventory-Receiving-Ledger",
					},
					{
						name: "Ap. Accrual Ledger",
						label: "Ap. Accrual Ledger",
						route: "/Inventory/Store-Accounting/Ap-Accrual-Ledger",
					},
					{
						name: "Store Ledger",
						label: "Store Ledger",
						route: "/Inventory/Store-Accounting/Store-Ledger",
					},
					{
						name: "Expense Ledger",
						label: "Expense Ledger",
						route: "/Inventory/Store-Accounting/Expense-Ledger",
					},
					{
						name: "Supplier Creditor Ledger",
						label: "Supplier Creditor Ledger",
						route: "/Inventory/Store-Accounting/Supplier-Creditor-Ledger",
					},
					{
						name: "Asset Clearing Ledger",
						label: "Asset Clearing Ledger",
						route: "/Inventory/Store-Accounting/Asset-Clearing-Ledger",
					},
					{
						name: "Asset Ledger",
						label: "Asset Ledger",
						route: "/Inventory/Store-Accounting/Asset-Ledger",
					},
					{
						name: "Activity Ledger",
						label: "Activity Ledger",
						route: "/Inventory/Store-Accounting/Activity-Ledger",
					},
				],
			},
		],
	},
	// Supply Network ===========================================================================
	{
		name: "Supply Network",
		label: "Supply Network",
		Icon: Home,
		parent: true,

		childs: [],
	},
	// Supplier Relationship Management ====================================================================
	{
		name: "Supplier Relationship Management",
		label: "Supplier Relationship Management",
		Icon: Home,
		parent: true,

		childs: [],
	},
	// HRM
	{
		name: "HRM",
		label: "HRM",
		Icon: Home,
		parent: true,

		childs: [],
	},
	// Sourcing Suite =================================================================
	{
		name: "Sourcing Suite",
		label: "Sourcing Suite",
		Icon: Home,
		parent: true,

		childs: [],
	},
	// Material Requirements Planning =================================================================
	{
		name: "Material Requirements Planning",
		label: "Material Requirements Planning",
		Icon: Home,
		parent: true,

		childs: [],
	},
	// Warehouse =================================================================
	{
		name: "Warehouse",
		label: "Warehouse",

		parent: true,

		childs: [
			{
				name: "Warehouse Configuration",
				label: "Warehouse Configuration",

				parent: true,
				childs: [
					{
						name: "Warehouse Name",
						label: "Warehouse",
						route: "/Warehouse/Warehouse-Configuration/Warehouse-Name",
					},
					{
						name: "Storage Type",
						label: "Storage Type",
						route: "/Warehouse/Warehouse-Configuration/Storage-Type",
					},
					{
						name: "Temporary Storage Type",
						label: "Temporary Storage Type",
						route: "/Warehouse/Warehouse-Configuration/Temporary-Storage-Type",
					},
					{
						name: "Temporary Storage",
						label: "Temporary Storage",
						route: "/Warehouse/Warehouse-Configuration/Temporary-Storage",
					},
					{
						name: "Barcode Printing",
						label: "Barcode Printing",
						route: "/Warehouse/Warehouse-Configuration/Barcode-Printing",
					},
				],
			},
			{
				name: "Warehouse Inbound",
				label: "Inbound",

				parent: true,
				childs: [
					{
						name: "Warehouse P.O. Receiving",
						label: "Warehouse P.O. Receiving",
						route: "/Warehouse/Inbound/Warehouse-PO-Receiving",
					},
					{
						name: "Warehouse Transactions Receiving",
						label: "Warehouse Transactions Receiving",
						route: "/Warehouse/Inbound/Warehouse-Transactions-Receiving",
					},
					{
						name: "Warehouse Transient",
						label: "Warehouse Transient",
						route: "/Warehouse/Inbound/Warehouse-Transient",
					},
					{
						name: "Warehouse Pickup/Placement",
						label: "Warehouse Pickup/Placement",
						route: "/Warehouse/Inbound/Warehouse-Pickup",
					},
				],
			},
			{
				name: "Warehouse Outbound",
				label: "Outbound",

				parent: true,
				childs: [
					{
						name: "Warehouse Transient",
						label: "Warehouse Transient",
						route: "/Warehouse/Outbound/Warehouse-Transient",
					},
					{
						name: "Warehouse Pickup/Placement",
						label: "Warehouse Pickup/Placement",
						route: "/Warehouse/Outbound/Warehouse-Pickup",
					},
				],
			},
		],
	},
	// SCM Reporting =================================================================
	{
		name: "SCM Reporting",
		label: "SCM Reporting",

		parent: true,

		childs: [],
	},
];
