import useSettingsFilter from "@/shared/hooks/useSettingsFilter";
import { Tab, Tabs } from "@nextui-org/react";
import { Key } from "react";

const SettingsTab = () => {
    const { activeItem, setActiveItem } = useSettingsFilter();

    const handleSelectionChange = (key: Key) => {
        setActiveItem(key.toString());
    };

    return (
        <Tabs
            variant={"underlined"}
            aria-label="Tabs variants"
            selectedKey={activeItem}
            onSelectionChange={handleSelectionChange}
        >
            <Tab key="API Access" title="API Access" />
            <Tab key="Customize Profile" title="Customize Profile" />
        </Tabs>
    );
};

export default SettingsTab;