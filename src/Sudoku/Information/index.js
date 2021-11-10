import { useSelector } from "react-redux";
import { selectMode } from "../../App/mainSlice";
import { getInformationText } from "./getInformation";
import { InformationBox, InformationText } from "./styled";

const Information = () => {
    const mode = useSelector(selectMode);
    const information = getInformationText(mode);

    return (
        <InformationBox>
            <InformationText>
                {information}
            </InformationText>
        </InformationBox>
    );
}

export default Information;