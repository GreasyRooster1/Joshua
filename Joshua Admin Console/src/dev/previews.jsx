import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import SideBar from "../Pages/Dashboard/SideBar/SideBar.jsx";
import SchoolIcon from "../components/icons/SchoolIcon.jsx";
import IconButton from "../components/IconButton.jsx";
import SideBarBrand from "../Pages/Dashboard/SideBar/SideBarBrand.jsx";
import SchoolSelector from "../Pages/Dashboard/SideBar/SchoolSelector.jsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/SideBar">
                <SideBar/>
            </ComponentPreview>
            <ComponentPreview path="/SchoolIcon">
                <SchoolIcon/>
            </ComponentPreview>
            <ComponentPreview path="/IconButton">
                <IconButton/>
            </ComponentPreview>
            <ComponentPreview path="/SideBarBrand">
                <SideBarBrand/>
            </ComponentPreview>
            <ComponentPreview path="/SchoolSelector">
                <SchoolSelector/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews