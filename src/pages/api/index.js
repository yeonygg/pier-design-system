import components from "../../pier-design-system/components/data";

export default async (req, res) => {
	res.status(200).json(components);
}