import components from "../../documentation/components/_componentsData";

export default async (req, res) => {
	res.status(200).json(components);
}