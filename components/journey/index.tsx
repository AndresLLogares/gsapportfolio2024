"use client";
import { ExperienceEnum } from "@/enums";
import { paletteColors } from "@/styles/colors";
import {
  TitleCardTimeline,
  SubTitleCardTimeline,
  TextCardTimeline,
} from "@/styles/journey";
import { FaBriefcase } from "react-icons/fa6";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const VerticalTimelineComponent = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        visible={true}
        className="vertical-timeline-element--work"
        contentStyle={{
          background: `${paletteColors.black}`,
          color: `${paletteColors.black}`,
        }}
        contentArrowStyle={{
          borderRight: `7px solid  ${paletteColors.orange}`,
        }}
        iconStyle={{
          background: `${paletteColors.lightGrey}`,
          color: `${paletteColors.black}`,
        }}
        icon={<FaBriefcase />}
      >
        <TitleCardTimeline $textcolorselected={null}>
          {ExperienceEnum.Accenture}
        </TitleCardTimeline>
        <SubTitleCardTimeline $textcolorselected={null}>
          {ExperienceEnum.AccentureDate}
        </SubTitleCardTimeline>
        <TextCardTimeline $textcolorselected={null}>
          {ExperienceEnum.AccentureFirst}
        </TextCardTimeline>
        <TextCardTimeline $textcolorselected={null}>
          {ExperienceEnum.AccentureSecond}
        </TextCardTimeline>
        <TextCardTimeline $textcolorselected={null}>
          {ExperienceEnum.AccentureThird}
        </TextCardTimeline>
        <TextCardTimeline $textcolorselected={null}>
          {ExperienceEnum.AccentureFourth}
        </TextCardTimeline>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        visible={true}
        className="vertical-timeline-element--work"
        contentStyle={{
          background: `${paletteColors.lightGrey}`,
          color: `${paletteColors.orange}`,
        }}
        contentArrowStyle={{
          borderRight: `7px solid  ${paletteColors.orange}`,
        }}
        iconStyle={{
          background: `${paletteColors.black}`,
          color: `${paletteColors.white}`,
        }}
        icon={<FaBriefcase />}
      >
        <TitleCardTimeline $textcolorselected={paletteColors.black}>
          {ExperienceEnum.ALT}
        </TitleCardTimeline>
        <SubTitleCardTimeline $textcolorselected={paletteColors.black}>
          {ExperienceEnum.ALTDate}
        </SubTitleCardTimeline>
        <TextCardTimeline $textcolorselected={paletteColors.black}>
          {ExperienceEnum.ALTFirst}
        </TextCardTimeline>
        <TextCardTimeline $textcolorselected={paletteColors.black}>
          {ExperienceEnum.ALTSecond}
        </TextCardTimeline>
        <TextCardTimeline $textcolorselected={paletteColors.black}>
          {ExperienceEnum.ALTThird}
        </TextCardTimeline>
        <TextCardTimeline $textcolorselected={paletteColors.black}>
          {ExperienceEnum.ALTFourth}
        </TextCardTimeline>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        visible={true}
        className="vertical-timeline-element--work"
        contentStyle={{
          background: `${paletteColors.black}`,
          color: `${paletteColors.black}`,
        }}
        contentArrowStyle={{
          borderRight: `7px solid  ${paletteColors.orange}`,
        }}
        iconStyle={{
          background: `${paletteColors.lightGrey}`,
          color: `${paletteColors.black}`,
        }}
        icon={<FaBriefcase />}
      >
        <TitleCardTimeline $textcolorselected={null}>
          {ExperienceEnum.OCTOSOFT}
        </TitleCardTimeline>
        <SubTitleCardTimeline $textcolorselected={null}>
          {" "}
          {ExperienceEnum.OCTOSOFTDate}
        </SubTitleCardTimeline>
        <TextCardTimeline $textcolorselected={null}>
          {ExperienceEnum.OCTOSOFTFirst}
        </TextCardTimeline>
        <TextCardTimeline $textcolorselected={null}>
          {ExperienceEnum.OCTOSOFTSecond}
        </TextCardTimeline>
        <TextCardTimeline $textcolorselected={null}>
          {ExperienceEnum.OCTOSOFTThird}
        </TextCardTimeline>
        <TextCardTimeline $textcolorselected={null}>
          {ExperienceEnum.OCTOSOFTFourth}
        </TextCardTimeline>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default VerticalTimelineComponent;