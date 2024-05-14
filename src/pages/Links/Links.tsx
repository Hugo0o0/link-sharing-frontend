import Page from "../../components/Page/Page";
import PageDescription from "../../components/Page/PageDescription";
import PageFooter from "../../components/Page/PageFooter/PageFooter";
import PageHead from "../../components/Page/PageHead/PageHead";
import PageMain from "../../components/Page/PageMain/PageMain";
import PageMainContent from "../../components/Page/PageMainContent/PageMainContent";
import { Button } from "../../components/UI";
import useLinks from "../../utils/hooks/useLinks";
import AddNewLink from "../../components/AddNewLink/AddNewLink";
import { DndContext, DragEndEvent, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import SortableLinkElement from "../../components/SortableElement/SortableElement";
import NoLinksFound from "../../components/NoLinksFound/NoLinksFound";

const Links = () => {
  const { addLink, links, setLinks } = useLinks();
  const handleAddLink = () => {
    addLink("codepen", "");
  };

  const onDragEnd = (e: DragEndEvent) => {
    if (e.active.id !== e.over?.id) {
      setLinks((items) => {
        const oldIndex = items?.findIndex((item) => item.id === e.active.id);
        const newIndex = items?.findIndex((item) => item.id === e.over!.id);
        return arrayMove(items!, oldIndex!, newIndex!);
      });
    }
  };

  return (
    <Page>
      <PageHead>
        <PageDescription
          title="Customize your links"
          description="Add/edit/remove links below and then share all your profiles with the world!"
        />
        <PageMain>
          <Button variant="secondary" onClick={handleAddLink}>
            + Add new link
          </Button>

          {!links && <NoLinksFound />}
          {links && (
            <DndContext
              collisionDetection={closestCenter}
              onDragEnd={onDragEnd}
            >
              <SortableContext
                items={links}
                strategy={verticalListSortingStrategy}
              >
                {links.map((link, i) => (
                  <SortableLinkElement key={link.id} id={link.id} />
                ))}
              </SortableContext>
            </DndContext>
          )}
        </PageMain>
      </PageHead>

      <PageFooter />
    </Page>
  );
};

export default Links;
