export default function isAdmin(req, res, next) {
    try {
        if (req.session.user.role === 'admin') {
            next();
        } else {
            res.status(401).render("errMessage", {
                title: "Oops.",
                message:"Only admins can see this page",
                link:"/",
            });
        }
    } catch (error) {
        res.status(500).render("errMessage", {
            title: "Oops.",
            message:"There was an error, sorry!",
            link:"/",
        });
    }
}