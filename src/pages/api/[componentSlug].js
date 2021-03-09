import components from "../../pier-design-system/components/data";

export default async (req, res) => {
	const componentSlug = req.query.componentSlug;
	const result = components.filter((component) => component.slug === componentSlug);
	
	if(result.length > 0) {
		res.status(200).json(result[0]);
	} else {
		res.status(404).json({ message: `Component ${componentSlug} not found.` });
	}
}