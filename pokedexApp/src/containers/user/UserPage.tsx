import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "../../components";
import { UserForm } from "./userForm/UserForm";
import styles from "./userPage.module.scss";
import { useToastContext, getUserInfo, setUserInfo } from "../../utils";
import { FavoriteList } from "./listFavorites/FavoriteList";

export interface User {
  name: string;
  lastname: string;
  username: string;
  email: string;
}

const INITIAL_FORM_VALUES: User = {
  name: "",
  lastname: "",
  username: "",
  email: "",
};

export const UserPage = () => {
  const { showToast } = useToastContext();

  const methods = useForm({
    defaultValues: INITIAL_FORM_VALUES,
    mode: "onSubmit",
  });

  const { handleSubmit, reset } = methods;

  const onSubmit = (values: User) => {
    setUserInfo(values);
    showToast({
      isDisplay: true,
      message: "Log in successfully",
      type: "success",
    });
  };

  useEffect(() => {
    const user: User | null = getUserInfo();

    if (user) {
      reset({
        name: user.name,
        lastname: user.lastname,
        username: user.username,
        email: user.email,
      });
    }
  }, []);

  return (
    <div className={styles.userPage}>
      <h2>User</h2>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.userPage}>
            <UserForm />
            <Button buttonStyle="primary" type="submit">
              Save
            </Button>
            <FavoriteList />
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
