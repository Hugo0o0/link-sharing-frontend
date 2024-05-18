import { Button, FormInput, Heading, Text } from "./components/UI";
import { CiUser } from "react-icons/ci";
import PlatformSelect from "./components/PlatformSelect/PlatformSelect";
import ImageUpload from "./components/ImageUpload/ImageUpload";
import PlatformPreview from "./components/PlatformPreview/PlatformPreview";
import { useMemo, useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const SortableItem = ({
  id,
  children,
}: {
  id: string | number;
  children: React.ReactNode;
}) => {
  const { transform, transition, listeners, attributes, setNodeRef } =
    useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    padding: "1.5rem",
    borderRadius: "12px",
    backgroundColor: "var(--clr-primary)",
  };
  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Text>{children}</Text>
    </div>
  );
};

const App = () => {
  const [items, setItems] = useState<
    { content: string; content2: string; id: number }[]
  >([
    {
      content: "Item 1",
      content2: "Item 1",
      id: 1,
    },
    {
      content: "Item 2",
      content2: "Item 2",
      id: 2,
    },
    {
      content: "Item 3",
      content2: "Item 3",
      id: 3,
    },
    {
      content: "Item 4",
      content2: "Item 4",
      id: 4,
    },
    {
      content: "Item 5",
      content2: "Item 5",
      id: 5,
    },
  ]);

  const itemIds = useMemo(() => items.map((item) => item.id), [items]);

  return (
    <div>
      <Heading size="s">Hello, world!</Heading>
      <Text>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
        Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
        Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
      </Text>

      <FormInput icon={<CiUser size={25} />} placeholder="Text Field Empty" />
      <Button variant="primary">Hello World</Button>
      <PlatformSelect platform="codepen" />

      <ImageUpload message="Upload your image" />
      <PlatformPreview platform="youtube" />

      <DndContext
        collisionDetection={closestCenter}
        onDragEnd={(e) => {
          const active = e.active.id as number;
          const over = e.over?.id as number;
          if (active !== over) {
            setItems((items) => {
              const oldIndex = items.findIndex((item) => item.id === active);
              const newIndex = items.findIndex((item) => item.id === over);
              return arrayMove(items, oldIndex, newIndex);
            });
          }
        }}
      >
        <SortableContext items={itemIds} strategy={verticalListSortingStrategy}>
          {items.map((item, i) => (
            <SortableItem key={item.id} id={item.id}>
              {item.content} {item.content2}
            </SortableItem>
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default App;
