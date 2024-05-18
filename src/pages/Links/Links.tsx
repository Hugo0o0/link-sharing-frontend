import { FieldArray, Formik } from "formik";

import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Button } from "components/UI";
import SortableLinkSelect from "components/SortableLinkSelect/SortableLinkSelect";
import { Page, PageFooter, PageHead, PageMain } from "components/Page";
import PageDescription from "components/Page/PageDescription";
import NoLinksFound from "components/NoLinksFound/NoLinksFound";
import { validationByPlatform } from "constants/constants";
import { Link, LinkPageDescription } from "types/types";

const Links = () => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const validate = (values: { links: Link[] | null }) => {
    const errors: any = { links: [] };
    if (values.links) {
      values.links.forEach((link, i) => {
        if (!link.url) {
          errors.links[i] = "Required";
          return errors;
        }
        const validation = validationByPlatform[link.platform];
        if (!validation.validate(link.url)) {
          errors.links[i] = validation.message;
        }
      });
    }
    return errors.links.length > 0 ? errors : {};
  };

  return (
    <Formik
      initialValues={{
        links: null as Link[] | null,
      }}
      onSubmit={(v) => {
        console.log(v);
      }}
      enableReinitialize
      validate={validate}
    >
      {({ values: { links }, isValid }) => (
        <Page>
          <PageHead>
            <PageDescription
              title={LinkPageDescription.title}
              description={LinkPageDescription.description}
            />
            <FieldArray name="links">
              {({ push, remove, move }) => (
                <PageMain>
                  <Button
                    variant="secondary"
                    type="button"
                    onClick={() => {
                      if (!links) {
                        return push({ platform: "x", url: "", id: 1 });
                      }
                      const lastId = links[links.length - 1].id;
                      push({ platform: "x", url: "", id: lastId + 1 });
                    }}
                  >
                    + Add New Link
                  </Button>
                  {(!links || links.length === 0) && <NoLinksFound />}
                  {links && links.length > 0 && (
                    <DndContext
                      sensors={sensors}
                      collisionDetection={closestCenter}
                      onDragEnd={(e) => {
                        const active = e.active.id as number;
                        const over = e.over?.id as number;
                        if (active !== over) {
                          const oldIndex = links.findIndex(
                            (link) => link.id === active
                          );

                          const newIndex = links.findIndex(
                            (link) => link.id === over
                          );
                          move(oldIndex, newIndex);
                        }
                      }}
                    >
                      <SortableContext
                        items={links.map((link, i) => link.id)}
                        strategy={verticalListSortingStrategy}
                      >
                        {links.map((link, i) => (
                          <SortableLinkSelect
                            id={link.id - 1}
                            index={i}
                            remove={remove}
                            key={link.id - 1}
                          />
                        ))}
                      </SortableContext>
                    </DndContext>
                  )}
                </PageMain>
              )}
            </FieldArray>
          </PageHead>
          <PageFooter
            type="submit"
            disabled={!isValid || !Boolean(links) || Boolean(links?.length)}
          />
        </Page>
      )}
    </Formik>
  );
};

export default Links;
