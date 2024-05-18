import { Formik } from "formik";
import {
  Page,
  PageFooter,
  PageHead,
  PageMain,
  PageMainContent,
} from "components/Page";
import PageDescription from "components/Page/PageDescription";
import { ProfilePageDescription } from "types/types";
import ImageUpload from "components/ImageUpload/ImageUpload";
import { FormInput, Text } from "components/UI";
import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <Formik
      initialValues={{}}
      onSubmit={(v) => {
        console.log(v);
      }}
      enableReinitialize
    >
      {(formik) => (
        <Page>
          <PageHead>
            <PageMain>
              <PageDescription
                title={ProfilePageDescription.title}
                description={ProfilePageDescription.description}
              />
              <PageMainContent>
                <div className={styles.profile__picture}>
                  <Text
                    color="grey"
                    style={{
                      width: "24rem",
                    }}
                  >
                    Profile Picture
                  </Text>
                  <ImageUpload message="Image must be below 1024x1024px. Use PNG or JPG format." />
                </div>
              </PageMainContent>

              <PageMainContent>
                <div className={styles.profile__form}>
                  <Text
                    style={{
                      flexBasis: "24rem",
                    }}
                  >
                    First name*
                  </Text>
                  <FormInput name="firstName" placeholder="e.g. John" />
                </div>
              </PageMainContent>

              <PageMainContent>
                <div className={styles.profile__form}>
                  <Text
                    style={{
                      flexBasis: "24rem",
                    }}
                  >
                    Last Name*
                  </Text>
                  <FormInput name="firstName" placeholder="e.g. Appleseed" />
                </div>
              </PageMainContent>

              <PageMainContent>
                <div className={styles.profile__form}>
                  <Text
                    style={{
                      flexBasis: "24rem",
                    }}
                  >
                    Email
                  </Text>
                  <FormInput
                    readOnly
                    disabled
                    name="firstName"
                    placeholder="e.g. email@example.com"
                  />
                </div>
              </PageMainContent>
            </PageMain>
          </PageHead>

          <PageFooter />
        </Page>
      )}
    </Formik>
  );
};

export default Profile;
