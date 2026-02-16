import { Router } from "express";
// import { NextFunction, Request, Response } from "express";
import { UserController } from "./user.controller";
import { UserValidation } from "./user.validation";
import { validateRequest } from "../../middleware/validateRequest";
// import { checkAuth } from "../../middleware/checkAuth";
// import { checkAuth } from "../../middleware/checkAuth";





const router = Router();


router.post("/create-doctor",

    //     (req: Request, res: Response, next: NextFunction) => {

    //     const parsedResult = createDoctorZodSchema.safeParse(req.body);

    //     if (!parsedResult.success) {
    //         next(parsedResult.error)
    //     }

    //     //sanitizing the data
    //     req.body = parsedResult.data;

    //     next()

    // }, 

    validateRequest(UserValidation.createDoctorValidationSchema),

    UserController.createDoctor);


    router.post(
  "/create-admin",
//   checkAuth("SUPER_ADMIN"), // Only super admin can create admin
  validateRequest(UserValidation.createAdminValidationSchema),
  UserController.createAdmin,
);





// router.post("/create-admin", UserController.createDoctor);
// router.post("/create-superadmin", UserController.createDoctor);

export const UserRoutes = router;