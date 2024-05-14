import { CSS } from "@dnd-kit/utilities";
import AddNewLink from "../AddNewLink/AddNewLink";
import PageMainContent from "../Page/PageMainContent/PageMainContent";
import { useSortable } from "@dnd-kit/sortable";
import { DragEndEvent } from "@dnd-kit/core";
import { FC } from "react";

interface SortableLinkElementProps {
  id: string | number;
}
const SortableLinkElement: FC<SortableLinkElementProps> = ({ id }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes}>
      <PageMainContent>
        <AddNewLink listeners={listeners} />
      </PageMainContent>
    </div>
  );
};

export default SortableLinkElement;
