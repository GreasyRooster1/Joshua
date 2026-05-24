import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import SideBar from "../Pages/Dashboard/SideBar/SideBar.jsx";
import SchoolIcon from "../components/icons/SchoolIcon.jsx";
import IconButton from "../components/IconButton.jsx";

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
        </Previews>
    )
}

export default ComponentPreviews