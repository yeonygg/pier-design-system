import API from "src/documentation/API";

export default async (req, res) => {
	const utilitySlug = req.query.utilitySlug;
	const result = API.utilities.filter((component) => component.slug === utilitySlug);
	
	if(result.length > 0) {
		res.status(200).json(result[0]);
	} else {
		res.status(404).json({ message: `Utility ${utilitySlug} not found.` });
	}
}