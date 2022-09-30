import React, { FunctionComponent, useState } from "react";
import { navigate } from "gatsby";
import { Layout } from "../components/layout";

export const NotFound: FunctionComponent = () => {
  return (
    <div>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="ProgId" content="Word.Document" />
      <meta name="Generator" content="Microsoft Word 15" />
      <meta name="Originator" content="Microsoft Word 15" />
      <link rel="File-List" href="Resume_Sameer_Kulkarni_AUG_2022.fld/filelist.xml" />
      <link rel="Edit-Time-Data" href="Resume_Sameer_Kulkarni_AUG_2022.fld/editdata.mso" />
      {/*[if !mso]>
<style>
v\:* {behavior:url(#default#VML);}
o\:* {behavior:url(#default#VML);}
w\:* {behavior:url(#default#VML);}
.shape {behavior:url(#default#VML);}
</style>
<![endif]*/}{/*[if gte mso 9]><xml>
<o:DocumentProperties>
<o:Author>Sameer Kulkarni</o:Author>
<o:LastAuthor>Sameer Kulkarni</o:LastAuthor>
<o:Revision>2</o:Revision>
<o:TotalTime>9</o:TotalTime>
<o:LastPrinted>2021-11-13T19:52:00Z</o:LastPrinted>
<o:Created>2022-09-30T15:22:00Z</o:Created>
<o:LastSaved>2022-09-30T15:22:00Z</o:LastSaved>
<o:Pages>5</o:Pages>
<o:Words>1405</o:Words>
<o:Characters>8015</o:Characters>
<o:Company>XYZ</o:Company>
<o:Lines>66</o:Lines>
<o:Paragraphs>18</o:Paragraphs>
<o:CharactersWithSpaces>9402</o:CharactersWithSpaces>
<o:Version>16.00</o:Version>
</o:DocumentProperties>
<o:OfficeDocumentSettings>
<o:RelyOnVML/>
<o:AllowPNG/>
</o:OfficeDocumentSettings>
</xml><![endif]*/}
      <link rel="dataStoreItem" href="Resume_Sameer_Kulkarni_AUG_2022.fld/item0001.xml" target="Resume_Sameer_Kulkarni_AUG_2022.fld/props002.xml" />
      <link rel="themeData" href="Resume_Sameer_Kulkarni_AUG_2022.fld/themedata.thmx" />
      <link rel="colorSchemeMapping" href="Resume_Sameer_Kulkarni_AUG_2022.fld/colorschememapping.xml" />
      {/*[if gte mso 9]><xml>
<w:WordDocument>
<w:SpellingState>Clean</w:SpellingState>
<w:GrammarState>Clean</w:GrammarState>
<w:TrackMoves>false</w:TrackMoves>
<w:TrackFormatting/>
<w:HyphenationZone>21</w:HyphenationZone>
<w:PunctuationKerning/>
<w:DrawingGridHorizontalSpacing>5,5 pt</w:DrawingGridHorizontalSpacing>
<w:DisplayHorizontalDrawingGridEvery>2</w:DisplayHorizontalDrawingGridEvery>
<w:ValidateAgainstSchemas/>
<w:SaveIfXMLInvalid>false</w:SaveIfXMLInvalid>
<w:IgnoreMixedContent>false</w:IgnoreMixedContent>
<w:AlwaysShowPlaceholderText>false</w:AlwaysShowPlaceholderText>
<w:StyleLock/>
<w:DoNotPromoteQF/>
<w:LidThemeOther>EN-US</w:LidThemeOther>
<w:LidThemeAsian>JA</w:LidThemeAsian>
<w:LidThemeComplexScript>MR</w:LidThemeComplexScript>
<w:Compatibility>
 <w:BreakWrappedTables/>
 <w:SnapToGridInCell/>
 <w:WrapTextWithPunct/>
 <w:UseAsianBreakRules/>
 <w:DontGrowAutofit/>
 <w:SplitPgBreakAndParaMark/>
 <w:EnableOpenTypeKerning/>
 <w:DontFlipMirrorIndents/>
 <w:OverrideTableStyleHps/>
</w:Compatibility>
<m:mathPr>
 <m:mathFont m:val="Cambria Math"/>
 <m:brkBin m:val="before"/>
 <m:brkBinSub m:val="&#45;-"/>
 <m:smallFrac m:val="off"/>
 <m:dispDef/>
 <m:lMargin m:val="0"/>
 <m:rMargin m:val="0"/>
 <m:defJc m:val="centerGroup"/>
 <m:wrapIndent m:val="1440"/>
 <m:intLim m:val="subSup"/>
 <m:naryLim m:val="undOvr"/>
</m:mathPr></w:WordDocument>
</xml><![endif]*/}{/*[if gte mso 9]><xml>
<w:LatentStyles DefLockedState="false" DefUnhideWhenUsed="false"
DefSemiHidden="false" DefQFormat="false" DefPriority="99"
LatentStyleCount="376">
<w:LsdException Locked="false" Priority="0" QFormat="true" Name="Normal"/>
<w:LsdException Locked="false" Priority="9" QFormat="true" Name="heading 1"/>
<w:LsdException Locked="false" Priority="9" SemiHidden="true"
 UnhideWhenUsed="true" QFormat="true" Name="heading 2"/>
<w:LsdException Locked="false" Priority="9" SemiHidden="true"
 UnhideWhenUsed="true" QFormat="true" Name="heading 3"/>
<w:LsdException Locked="false" Priority="9" SemiHidden="true"
 UnhideWhenUsed="true" QFormat="true" Name="heading 4"/>
<w:LsdException Locked="false" Priority="9" SemiHidden="true"
 UnhideWhenUsed="true" QFormat="true" Name="heading 5"/>
<w:LsdException Locked="false" Priority="9" SemiHidden="true"
 UnhideWhenUsed="true" QFormat="true" Name="heading 6"/>
<w:LsdException Locked="false" Priority="9" SemiHidden="true"
 UnhideWhenUsed="true" QFormat="true" Name="heading 7"/>
<w:LsdException Locked="false" Priority="9" SemiHidden="true"
 UnhideWhenUsed="true" QFormat="true" Name="heading 8"/>
<w:LsdException Locked="false" Priority="9" SemiHidden="true"
 UnhideWhenUsed="true" QFormat="true" Name="heading 9"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="index 1"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="index 2"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="index 3"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="index 4"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="index 5"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="index 6"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="index 7"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="index 8"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="index 9"/>
<w:LsdException Locked="false" Priority="39" SemiHidden="true"
 UnhideWhenUsed="true" Name="toc 1"/>
<w:LsdException Locked="false" Priority="39" SemiHidden="true"
 UnhideWhenUsed="true" Name="toc 2"/>
<w:LsdException Locked="false" Priority="39" SemiHidden="true"
 UnhideWhenUsed="true" Name="toc 3"/>
<w:LsdException Locked="false" Priority="39" SemiHidden="true"
 UnhideWhenUsed="true" Name="toc 4"/>
<w:LsdException Locked="false" Priority="39" SemiHidden="true"
 UnhideWhenUsed="true" Name="toc 5"/>
<w:LsdException Locked="false" Priority="39" SemiHidden="true"
 UnhideWhenUsed="true" Name="toc 6"/>
<w:LsdException Locked="false" Priority="39" SemiHidden="true"
 UnhideWhenUsed="true" Name="toc 7"/>
<w:LsdException Locked="false" Priority="39" SemiHidden="true"
 UnhideWhenUsed="true" Name="toc 8"/>
<w:LsdException Locked="false" Priority="39" SemiHidden="true"
 UnhideWhenUsed="true" Name="toc 9"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Normal Indent"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="footnote text"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="annotation text"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="header"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="footer"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="index heading"/>
<w:LsdException Locked="false" Priority="35" SemiHidden="true"
 UnhideWhenUsed="true" QFormat="true" Name="caption"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="table of figures"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="envelope address"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="envelope return"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="footnote reference"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="annotation reference"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="line number"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="page number"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="endnote reference"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="endnote text"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="table of authorities"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="macro"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="toa heading"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="List"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="List Bullet"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="List Number"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="List 2"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="List 3"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="List 4"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="List 5"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="List Bullet 2"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="List Bullet 3"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="List Bullet 4"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="List Bullet 5"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="List Number 2"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="List Number 3"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="List Number 4"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="List Number 5"/>
<w:LsdException Locked="false" Priority="10" QFormat="true" Name="Title"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Closing"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Signature"/>
<w:LsdException Locked="false" Priority="1" SemiHidden="true"
 UnhideWhenUsed="true" Name="Default Paragraph Font"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Body Text"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Body Text Indent"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="List Continue"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="List Continue 2"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="List Continue 3"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="List Continue 4"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="List Continue 5"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Message Header"/>
<w:LsdException Locked="false" Priority="11" QFormat="true" Name="Subtitle"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Salutation"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Date"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Body Text First Indent"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Body Text First Indent 2"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Note Heading"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Body Text 2"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Body Text 3"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Body Text Indent 2"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Body Text Indent 3"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Block Text"/>
<w:LsdException Locked="false" Priority="0" SemiHidden="true"
 UnhideWhenUsed="true" Name="Hyperlink"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="FollowedHyperlink"/>
<w:LsdException Locked="false" Priority="22" QFormat="true" Name="Strong"/>
<w:LsdException Locked="false" Priority="20" QFormat="true" Name="Emphasis"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Document Map"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Plain Text"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="E-mail Signature"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="HTML Top of Form"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="HTML Bottom of Form"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Normal (Web)"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="HTML Acronym"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="HTML Address"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="HTML Cite"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="HTML Code"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="HTML Definition"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="HTML Keyboard"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="HTML Preformatted"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="HTML Sample"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="HTML Typewriter"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="HTML Variable"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Normal Table"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="annotation subject"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="No List"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Outline List 1"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Outline List 2"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Outline List 3"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Table Simple 1"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Table Simple 2"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Table Simple 3"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Table Classic 1"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Table Classic 2"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Table Classic 3"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Table Classic 4"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Table Colorful 1"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Table Colorful 2"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Table Colorful 3"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Table Columns 1"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Table Columns 2"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Table Columns 3"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Table Columns 4"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Table Columns 5"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Table Grid 1"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Table Grid 2"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Table Grid 3"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Table Grid 4"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Table Grid 5"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Table Grid 6"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Table Grid 7"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Table Grid 8"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Table List 1"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Table List 2"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Table List 3"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Table List 4"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Table List 5"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Table List 6"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Table List 7"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Table List 8"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Table 3D effects 1"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Table 3D effects 2"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Table 3D effects 3"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Table Contemporary"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Table Elegant"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Table Professional"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Table Subtle 1"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Table Subtle 2"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Table Web 1"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Table Web 2"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Table Web 3"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Balloon Text"/>
<w:LsdException Locked="false" Priority="59" Name="Table Grid"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Table Theme"/>
<w:LsdException Locked="false" SemiHidden="true" Name="Placeholder Text"/>
<w:LsdException Locked="false" Priority="1" QFormat="true" Name="No Spacing"/>
<w:LsdException Locked="false" Priority="60" Name="Light Shading"/>
<w:LsdException Locked="false" Priority="61" Name="Light List"/>
<w:LsdException Locked="false" Priority="62" Name="Light Grid"/>
<w:LsdException Locked="false" Priority="63" Name="Medium Shading 1"/>
<w:LsdException Locked="false" Priority="64" Name="Medium Shading 2"/>
<w:LsdException Locked="false" Priority="65" Name="Medium List 1"/>
<w:LsdException Locked="false" Priority="66" Name="Medium List 2"/>
<w:LsdException Locked="false" Priority="67" Name="Medium Grid 1"/>
<w:LsdException Locked="false" Priority="68" Name="Medium Grid 2"/>
<w:LsdException Locked="false" Priority="69" Name="Medium Grid 3"/>
<w:LsdException Locked="false" Priority="70" Name="Dark List"/>
<w:LsdException Locked="false" Priority="71" Name="Colorful Shading"/>
<w:LsdException Locked="false" Priority="72" Name="Colorful List"/>
<w:LsdException Locked="false" Priority="73" Name="Colorful Grid"/>
<w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 1"/>
<w:LsdException Locked="false" Priority="61" Name="Light List Accent 1"/>
<w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 1"/>
<w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 1"/>
<w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 1"/>
<w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 1"/>
<w:LsdException Locked="false" SemiHidden="true" Name="Revision"/>
<w:LsdException Locked="false" Priority="34" QFormat="true"
 Name="List Paragraph"/>
<w:LsdException Locked="false" Priority="29" QFormat="true" Name="Quote"/>
<w:LsdException Locked="false" Priority="30" QFormat="true"
 Name="Intense Quote"/>
<w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 1"/>
<w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 1"/>
<w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 1"/>
<w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 1"/>
<w:LsdException Locked="false" Priority="70" Name="Dark List Accent 1"/>
<w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 1"/>
<w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 1"/>
<w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 1"/>
<w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 2"/>
<w:LsdException Locked="false" Priority="61" Name="Light List Accent 2"/>
<w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 2"/>
<w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 2"/>
<w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 2"/>
<w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 2"/>
<w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 2"/>
<w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 2"/>
<w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 2"/>
<w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 2"/>
<w:LsdException Locked="false" Priority="70" Name="Dark List Accent 2"/>
<w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 2"/>
<w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 2"/>
<w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 2"/>
<w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 3"/>
<w:LsdException Locked="false" Priority="61" Name="Light List Accent 3"/>
<w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 3"/>
<w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 3"/>
<w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 3"/>
<w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 3"/>
<w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 3"/>
<w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 3"/>
<w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 3"/>
<w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 3"/>
<w:LsdException Locked="false" Priority="70" Name="Dark List Accent 3"/>
<w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 3"/>
<w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 3"/>
<w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 3"/>
<w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 4"/>
<w:LsdException Locked="false" Priority="61" Name="Light List Accent 4"/>
<w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 4"/>
<w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 4"/>
<w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 4"/>
<w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 4"/>
<w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 4"/>
<w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 4"/>
<w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 4"/>
<w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 4"/>
<w:LsdException Locked="false" Priority="70" Name="Dark List Accent 4"/>
<w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 4"/>
<w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 4"/>
<w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 4"/>
<w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 5"/>
<w:LsdException Locked="false" Priority="61" Name="Light List Accent 5"/>
<w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 5"/>
<w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 5"/>
<w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 5"/>
<w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 5"/>
<w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 5"/>
<w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 5"/>
<w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 5"/>
<w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 5"/>
<w:LsdException Locked="false" Priority="70" Name="Dark List Accent 5"/>
<w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 5"/>
<w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 5"/>
<w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 5"/>
<w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 6"/>
<w:LsdException Locked="false" Priority="61" Name="Light List Accent 6"/>
<w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 6"/>
<w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 6"/>
<w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 6"/>
<w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 6"/>
<w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 6"/>
<w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 6"/>
<w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 6"/>
<w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 6"/>
<w:LsdException Locked="false" Priority="70" Name="Dark List Accent 6"/>
<w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 6"/>
<w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 6"/>
<w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 6"/>
<w:LsdException Locked="false" Priority="19" QFormat="true"
 Name="Subtle Emphasis"/>
<w:LsdException Locked="false" Priority="21" QFormat="true"
 Name="Intense Emphasis"/>
<w:LsdException Locked="false" Priority="31" QFormat="true"
 Name="Subtle Reference"/>
<w:LsdException Locked="false" Priority="32" QFormat="true"
 Name="Intense Reference"/>
<w:LsdException Locked="false" Priority="33" QFormat="true" Name="Book Title"/>
<w:LsdException Locked="false" Priority="37" SemiHidden="true"
 UnhideWhenUsed="true" Name="Bibliography"/>
<w:LsdException Locked="false" Priority="39" SemiHidden="true"
 UnhideWhenUsed="true" QFormat="true" Name="TOC Heading"/>
<w:LsdException Locked="false" Priority="41" Name="Plain Table 1"/>
<w:LsdException Locked="false" Priority="42" Name="Plain Table 2"/>
<w:LsdException Locked="false" Priority="43" Name="Plain Table 3"/>
<w:LsdException Locked="false" Priority="44" Name="Plain Table 4"/>
<w:LsdException Locked="false" Priority="45" Name="Plain Table 5"/>
<w:LsdException Locked="false" Priority="40" Name="Grid Table Light"/>
<w:LsdException Locked="false" Priority="46" Name="Grid Table 1 Light"/>
<w:LsdException Locked="false" Priority="47" Name="Grid Table 2"/>
<w:LsdException Locked="false" Priority="48" Name="Grid Table 3"/>
<w:LsdException Locked="false" Priority="49" Name="Grid Table 4"/>
<w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark"/>
<w:LsdException Locked="false" Priority="51" Name="Grid Table 6 Colorful"/>
<w:LsdException Locked="false" Priority="52" Name="Grid Table 7 Colorful"/>
<w:LsdException Locked="false" Priority="46"
 Name="Grid Table 1 Light Accent 1"/>
<w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 1"/>
<w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 1"/>
<w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 1"/>
<w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 1"/>
<w:LsdException Locked="false" Priority="51"
 Name="Grid Table 6 Colorful Accent 1"/>
<w:LsdException Locked="false" Priority="52"
 Name="Grid Table 7 Colorful Accent 1"/>
<w:LsdException Locked="false" Priority="46"
 Name="Grid Table 1 Light Accent 2"/>
<w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 2"/>
<w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 2"/>
<w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 2"/>
<w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 2"/>
<w:LsdException Locked="false" Priority="51"
 Name="Grid Table 6 Colorful Accent 2"/>
<w:LsdException Locked="false" Priority="52"
 Name="Grid Table 7 Colorful Accent 2"/>
<w:LsdException Locked="false" Priority="46"
 Name="Grid Table 1 Light Accent 3"/>
<w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 3"/>
<w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 3"/>
<w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 3"/>
<w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 3"/>
<w:LsdException Locked="false" Priority="51"
 Name="Grid Table 6 Colorful Accent 3"/>
<w:LsdException Locked="false" Priority="52"
 Name="Grid Table 7 Colorful Accent 3"/>
<w:LsdException Locked="false" Priority="46"
 Name="Grid Table 1 Light Accent 4"/>
<w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 4"/>
<w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 4"/>
<w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 4"/>
<w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 4"/>
<w:LsdException Locked="false" Priority="51"
 Name="Grid Table 6 Colorful Accent 4"/>
<w:LsdException Locked="false" Priority="52"
 Name="Grid Table 7 Colorful Accent 4"/>
<w:LsdException Locked="false" Priority="46"
 Name="Grid Table 1 Light Accent 5"/>
<w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 5"/>
<w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 5"/>
<w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 5"/>
<w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 5"/>
<w:LsdException Locked="false" Priority="51"
 Name="Grid Table 6 Colorful Accent 5"/>
<w:LsdException Locked="false" Priority="52"
 Name="Grid Table 7 Colorful Accent 5"/>
<w:LsdException Locked="false" Priority="46"
 Name="Grid Table 1 Light Accent 6"/>
<w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 6"/>
<w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 6"/>
<w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 6"/>
<w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 6"/>
<w:LsdException Locked="false" Priority="51"
 Name="Grid Table 6 Colorful Accent 6"/>
<w:LsdException Locked="false" Priority="52"
 Name="Grid Table 7 Colorful Accent 6"/>
<w:LsdException Locked="false" Priority="46" Name="List Table 1 Light"/>
<w:LsdException Locked="false" Priority="47" Name="List Table 2"/>
<w:LsdException Locked="false" Priority="48" Name="List Table 3"/>
<w:LsdException Locked="false" Priority="49" Name="List Table 4"/>
<w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark"/>
<w:LsdException Locked="false" Priority="51" Name="List Table 6 Colorful"/>
<w:LsdException Locked="false" Priority="52" Name="List Table 7 Colorful"/>
<w:LsdException Locked="false" Priority="46"
 Name="List Table 1 Light Accent 1"/>
<w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 1"/>
<w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 1"/>
<w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 1"/>
<w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 1"/>
<w:LsdException Locked="false" Priority="51"
 Name="List Table 6 Colorful Accent 1"/>
<w:LsdException Locked="false" Priority="52"
 Name="List Table 7 Colorful Accent 1"/>
<w:LsdException Locked="false" Priority="46"
 Name="List Table 1 Light Accent 2"/>
<w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 2"/>
<w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 2"/>
<w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 2"/>
<w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 2"/>
<w:LsdException Locked="false" Priority="51"
 Name="List Table 6 Colorful Accent 2"/>
<w:LsdException Locked="false" Priority="52"
 Name="List Table 7 Colorful Accent 2"/>
<w:LsdException Locked="false" Priority="46"
 Name="List Table 1 Light Accent 3"/>
<w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 3"/>
<w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 3"/>
<w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 3"/>
<w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 3"/>
<w:LsdException Locked="false" Priority="51"
 Name="List Table 6 Colorful Accent 3"/>
<w:LsdException Locked="false" Priority="52"
 Name="List Table 7 Colorful Accent 3"/>
<w:LsdException Locked="false" Priority="46"
 Name="List Table 1 Light Accent 4"/>
<w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 4"/>
<w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 4"/>
<w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 4"/>
<w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 4"/>
<w:LsdException Locked="false" Priority="51"
 Name="List Table 6 Colorful Accent 4"/>
<w:LsdException Locked="false" Priority="52"
 Name="List Table 7 Colorful Accent 4"/>
<w:LsdException Locked="false" Priority="46"
 Name="List Table 1 Light Accent 5"/>
<w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 5"/>
<w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 5"/>
<w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 5"/>
<w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 5"/>
<w:LsdException Locked="false" Priority="51"
 Name="List Table 6 Colorful Accent 5"/>
<w:LsdException Locked="false" Priority="52"
 Name="List Table 7 Colorful Accent 5"/>
<w:LsdException Locked="false" Priority="46"
 Name="List Table 1 Light Accent 6"/>
<w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 6"/>
<w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 6"/>
<w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 6"/>
<w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 6"/>
<w:LsdException Locked="false" Priority="51"
 Name="List Table 6 Colorful Accent 6"/>
<w:LsdException Locked="false" Priority="52"
 Name="List Table 7 Colorful Accent 6"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Mention"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Smart Hyperlink"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Hashtag"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Unresolved Mention"/>
<w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
 Name="Smart Link"/>
</w:LatentStyles>
</xml><![endif]*/}
      <style dangerouslySetInnerHTML={{__html: "\n<!--\n /* Font Definitions */\n @font-face\n\t{font-family:Wingdings;\n\tpanose-1:5 0 0 0 0 0 0 0 0 0;\n\tmso-font-charset:77;\n\tmso-generic-font-family:decorative;\n\tmso-font-pitch:variable;\n\tmso-font-signature:3 0 0 0 -2147483647 0;}\n@font-face\n\t{font-family:\"Cambria Math\";\n\tpanose-1:2 4 5 3 5 4 6 3 2 4;\n\tmso-font-charset:0;\n\tmso-generic-font-family:roman;\n\tmso-font-pitch:variable;\n\tmso-font-signature:-536870145 1107305727 0 0 415 0;}\n@font-face\n\t{font-family:Calibri;\n\tpanose-1:2 15 5 2 2 2 4 3 2 4;\n\tmso-font-charset:0;\n\tmso-generic-font-family:swiss;\n\tmso-font-pitch:variable;\n\tmso-font-signature:-469750017 -1073732485 9 0 511 0;}\n@font-face\n\t{font-family:Verdana;\n\tpanose-1:2 11 6 4 3 5 4 4 2 4;\n\tmso-font-charset:0;\n\tmso-generic-font-family:swiss;\n\tmso-font-pitch:variable;\n\tmso-font-signature:-1593833729 1073750107 16 0 415 0;}\n@font-face\n\t{font-family:Tahoma;\n\tpanose-1:2 11 6 4 3 5 4 4 2 4;\n\tmso-font-charset:0;\n\tmso-generic-font-family:swiss;\n\tmso-font-pitch:variable;\n\tmso-font-signature:-520081665 -1073717157 41 0 66047 0;}\n@font-face\n\t{font-family:Cambria;\n\tpanose-1:2 4 5 3 5 4 6 3 2 4;\n\tmso-font-charset:0;\n\tmso-generic-font-family:roman;\n\tmso-font-pitch:variable;\n\tmso-font-signature:-536869121 1107305727 33554432 0 415 0;}\n@font-face\n\t{font-family:\"Cambria\\,Times New Roman\";\n\tpanose-1:2 11 6 4 2 2 2 2 2 4;\n\tmso-font-alt:\"Times New Roman\";\n\tmso-font-charset:0;\n\tmso-generic-font-family:roman;\n\tmso-font-pitch:auto;\n\tmso-font-signature:0 0 0 0 0 0;}\n /* Style Definitions */\n p.MsoNormal, li.MsoNormal, div.MsoNormal\n\t{mso-style-unhide:no;\n\tmso-style-qformat:yes;\n\tmso-style-parent:\"\";\n\tmargin-top:0cm;\n\tmargin-right:0cm;\n\tmargin-bottom:10.0pt;\n\tmargin-left:0cm;\n\tline-height:115%;\n\tmso-pagination:widow-orphan;\n\tfont-size:11.0pt;\n\tfont-family:\"Calibri\",sans-serif;\n\tmso-fareast-font-family:Calibri;\n\tmso-bidi-font-family:\"Times New Roman\";\n\tmso-ansi-language:EN-US;\n\tmso-fareast-language:EN-US;}\nh1\n\t{mso-style-priority:9;\n\tmso-style-qformat:yes;\n\tmso-style-parent:\"\";\n\tmso-style-link:\"Heading 1 Char\";\n\tmso-style-next:Normal;\n\tmargin-top:0cm;\n\tmargin-right:16.55pt;\n\tmargin-bottom:0cm;\n\tmargin-left:.5pt;\n\ttext-align:right;\n\ttext-indent:-.5pt;\n\tline-height:107%;\n\tmso-pagination:widow-orphan lines-together;\n\tpage-break-after:avoid;\n\tmso-outline-level:1;\n\tfont-size:23.0pt;\n\tmso-bidi-font-size:11.0pt;\n\tfont-family:\"Times New Roman\",serif;\n\tmso-fareast-font-family:\"Times New Roman\";\n\tcolor:black;\n\tmso-font-kerning:0pt;\n\tmso-ansi-language:EN-US;\n\tmso-fareast-language:JA;\n\tfont-weight:normal;}\nh2\n\t{mso-style-priority:9;\n\tmso-style-qformat:yes;\n\tmso-style-parent:\"\";\n\tmso-style-link:\"Heading 2 Char\";\n\tmso-style-next:Normal;\n\tmargin-top:0cm;\n\tmargin-right:.7pt;\n\tmargin-bottom:16.6pt;\n\tmargin-left:0cm;\n\ttext-align:center;\n\tline-height:107%;\n\tmso-pagination:widow-orphan lines-together;\n\tpage-break-after:avoid;\n\tmso-outline-level:2;\n\tfont-size:16.0pt;\n\tmso-bidi-font-size:11.0pt;\n\tfont-family:\"Calibri\",sans-serif;\n\tmso-fareast-font-family:Calibri;\n\tcolor:black;\n\tmso-ansi-language:EN-US;\n\tmso-fareast-language:JA;\n\tfont-weight:normal;}\np.MsoHeader, li.MsoHeader, div.MsoHeader\n\t{mso-style-noshow:yes;\n\tmso-style-priority:99;\n\tmso-style-link:\"Header Char\";\n\tmargin-top:0cm;\n\tmargin-right:0cm;\n\tmargin-bottom:10.0pt;\n\tmargin-left:0cm;\n\tline-height:115%;\n\tmso-pagination:widow-orphan;\n\ttab-stops:center 220.95pt right 441.9pt;\n\tfont-size:11.0pt;\n\tfont-family:\"Calibri\",sans-serif;\n\tmso-fareast-font-family:Calibri;\n\tmso-bidi-font-family:\"Times New Roman\";\n\tmso-ansi-language:EN-US;\n\tmso-fareast-language:EN-US;}\np.MsoFooter, li.MsoFooter, div.MsoFooter\n\t{mso-style-noshow:yes;\n\tmso-style-priority:99;\n\tmso-style-link:\"Footer Char\";\n\tmargin-top:0cm;\n\tmargin-right:0cm;\n\tmargin-bottom:10.0pt;\n\tmargin-left:0cm;\n\tline-height:115%;\n\tmso-pagination:widow-orphan;\n\ttab-stops:center 220.95pt right 441.9pt;\n\tfont-size:11.0pt;\n\tfont-family:\"Calibri\",sans-serif;\n\tmso-fareast-font-family:Calibri;\n\tmso-bidi-font-family:\"Times New Roman\";\n\tmso-ansi-language:EN-US;\n\tmso-fareast-language:EN-US;}\na:link, span.MsoHyperlink\n\t{mso-style-noshow:yes;\n\tmso-style-unhide:no;\n\tcolor:blue;\n\ttext-decoration:underline;\n\ttext-underline:single;}\na:visited, span.MsoHyperlinkFollowed\n\t{mso-style-noshow:yes;\n\tmso-style-priority:99;\n\tcolor:#954F72;\n\tmso-themecolor:followedhyperlink;\n\ttext-decoration:underline;\n\ttext-underline:single;}\np\n\t{mso-style-noshow:yes;\n\tmso-style-priority:99;\n\tmso-margin-top-alt:auto;\n\tmargin-right:0cm;\n\tmso-margin-bottom-alt:auto;\n\tmargin-left:0cm;\n\tmso-pagination:widow-orphan;\n\tfont-size:12.0pt;\n\tfont-family:\"Times New Roman\",serif;\n\tmso-fareast-font-family:\"Times New Roman\";\n\tmso-ansi-language:EN-US;\n\tmso-fareast-language:JA;}\np.MsoAcetate, li.MsoAcetate, div.MsoAcetate\n\t{mso-style-noshow:yes;\n\tmso-style-priority:99;\n\tmso-style-link:\"Balloon Text Char\";\n\tmargin:0cm;\n\tmso-pagination:widow-orphan;\n\tfont-size:8.0pt;\n\tfont-family:\"Tahoma\",sans-serif;\n\tmso-fareast-font-family:Calibri;\n\tmso-ansi-language:EN-US;\n\tmso-fareast-language:EN-US;}\np.MsoListParagraph, li.MsoListParagraph, div.MsoListParagraph\n\t{mso-style-priority:34;\n\tmso-style-unhide:no;\n\tmso-style-qformat:yes;\n\tmargin-top:0cm;\n\tmargin-right:0cm;\n\tmargin-bottom:0cm;\n\tmargin-left:36.0pt;\n\tmso-add-space:auto;\n\tmso-pagination:widow-orphan;\n\tfont-size:12.0pt;\n\tfont-family:\"Times New Roman\",serif;\n\tmso-fareast-font-family:\"Times New Roman\";\n\tmso-ansi-language:EN-US;\n\tmso-fareast-language:EN-US;}\np.MsoListParagraphCxSpFirst, li.MsoListParagraphCxSpFirst, div.MsoListParagraphCxSpFirst\n\t{mso-style-priority:34;\n\tmso-style-unhide:no;\n\tmso-style-qformat:yes;\n\tmso-style-type:export-only;\n\tmargin-top:0cm;\n\tmargin-right:0cm;\n\tmargin-bottom:0cm;\n\tmargin-left:36.0pt;\n\tmso-add-space:auto;\n\tmso-pagination:widow-orphan;\n\tfont-size:12.0pt;\n\tfont-family:\"Times New Roman\",serif;\n\tmso-fareast-font-family:\"Times New Roman\";\n\tmso-ansi-language:EN-US;\n\tmso-fareast-language:EN-US;}\np.MsoListParagraphCxSpMiddle, li.MsoListParagraphCxSpMiddle, div.MsoListParagraphCxSpMiddle\n\t{mso-style-priority:34;\n\tmso-style-unhide:no;\n\tmso-style-qformat:yes;\n\tmso-style-type:export-only;\n\tmargin-top:0cm;\n\tmargin-right:0cm;\n\tmargin-bottom:0cm;\n\tmargin-left:36.0pt;\n\tmso-add-space:auto;\n\tmso-pagination:widow-orphan;\n\tfont-size:12.0pt;\n\tfont-family:\"Times New Roman\",serif;\n\tmso-fareast-font-family:\"Times New Roman\";\n\tmso-ansi-language:EN-US;\n\tmso-fareast-language:EN-US;}\np.MsoListParagraphCxSpLast, li.MsoListParagraphCxSpLast, div.MsoListParagraphCxSpLast\n\t{mso-style-priority:34;\n\tmso-style-unhide:no;\n\tmso-style-qformat:yes;\n\tmso-style-type:export-only;\n\tmargin-top:0cm;\n\tmargin-right:0cm;\n\tmargin-bottom:0cm;\n\tmargin-left:36.0pt;\n\tmso-add-space:auto;\n\tmso-pagination:widow-orphan;\n\tfont-size:12.0pt;\n\tfont-family:\"Times New Roman\",serif;\n\tmso-fareast-font-family:\"Times New Roman\";\n\tmso-ansi-language:EN-US;\n\tmso-fareast-language:EN-US;}\nspan.BalloonTextChar\n\t{mso-style-name:\"Balloon Text Char\";\n\tmso-style-noshow:yes;\n\tmso-style-priority:99;\n\tmso-style-unhide:no;\n\tmso-style-locked:yes;\n\tmso-style-link:\"Balloon Text\";\n\tmso-ansi-font-size:8.0pt;\n\tmso-bidi-font-size:8.0pt;\n\tfont-family:\"Tahoma\",sans-serif;\n\tmso-ascii-font-family:Tahoma;\n\tmso-hansi-font-family:Tahoma;\n\tmso-bidi-font-family:Tahoma;}\nspan.go\n\t{mso-style-name:go;\n\tmso-style-unhide:no;}\nspan.rad11\n\t{mso-style-name:rad11;\n\tmso-style-unhide:no;\n\tmso-ansi-font-size:8.5pt;\n\tfont-family:\"Verdana\",sans-serif;\n\tmso-ascii-font-family:Verdana;\n\tmso-hansi-font-family:Verdana;}\nspan.HeaderChar\n\t{mso-style-name:\"Header Char\";\n\tmso-style-noshow:yes;\n\tmso-style-priority:99;\n\tmso-style-unhide:no;\n\tmso-style-locked:yes;\n\tmso-style-link:Header;\n\tmso-ansi-font-size:11.0pt;\n\tmso-bidi-font-size:11.0pt;\n\tmso-fareast-language:EN-US;}\nspan.FooterChar\n\t{mso-style-name:\"Footer Char\";\n\tmso-style-noshow:yes;\n\tmso-style-priority:99;\n\tmso-style-unhide:no;\n\tmso-style-locked:yes;\n\tmso-style-link:Footer;\n\tmso-ansi-font-size:11.0pt;\n\tmso-bidi-font-size:11.0pt;\n\tmso-fareast-language:EN-US;}\nspan.Heading1Char\n\t{mso-style-name:\"Heading 1 Char\";\n\tmso-style-priority:9;\n\tmso-style-unhide:no;\n\tmso-style-locked:yes;\n\tmso-style-link:\"Heading 1\";\n\tmso-ansi-font-size:23.0pt;\n\tmso-bidi-font-size:11.0pt;\n\tfont-family:\"Times New Roman\",serif;\n\tmso-ascii-font-family:\"Times New Roman\";\n\tmso-fareast-font-family:\"Times New Roman\";\n\tmso-hansi-font-family:\"Times New Roman\";\n\tcolor:black;}\nspan.Heading2Char\n\t{mso-style-name:\"Heading 2 Char\";\n\tmso-style-priority:9;\n\tmso-style-unhide:no;\n\tmso-style-locked:yes;\n\tmso-style-link:\"Heading 2\";\n\tmso-ansi-font-size:16.0pt;\n\tmso-bidi-font-size:11.0pt;\n\tfont-family:\"Calibri\",sans-serif;\n\tmso-bidi-font-family:Calibri;\n\tcolor:black;}\nspan.SpellE\n\t{mso-style-name:\"\";\n\tmso-spl-e:yes;}\nspan.GramE\n\t{mso-style-name:\"\";\n\tmso-gram-e:yes;}\n.MsoChpDefault\n\t{mso-style-type:export-only;\n\tmso-default-props:yes;\n\tfont-size:10.0pt;\n\tmso-ansi-font-size:10.0pt;\n\tmso-bidi-font-size:10.0pt;\n\tfont-family:\"Calibri\",sans-serif;\n\tmso-ascii-font-family:Calibri;\n\tmso-fareast-font-family:Calibri;\n\tmso-hansi-font-family:Calibri;\n\tmso-ansi-language:EN-US;\n\tmso-fareast-language:JA;}\n /* Page Definitions */\n @page\n\t{mso-footnote-separator:url(\"Resume_Sameer_Kulkarni_AUG_2022.fld/header.html\") fs;\n\tmso-footnote-continuation-separator:url(\"Resume_Sameer_Kulkarni_AUG_2022.fld/header.html\") fcs;\n\tmso-footnote-continuation-notice:url(\"Resume_Sameer_Kulkarni_AUG_2022.fld/header.html\") fcn;\n\tmso-endnote-separator:url(\"Resume_Sameer_Kulkarni_AUG_2022.fld/header.html\") es;\n\tmso-endnote-continuation-separator:url(\"Resume_Sameer_Kulkarni_AUG_2022.fld/header.html\") ecs;\n\tmso-endnote-continuation-notice:url(\"Resume_Sameer_Kulkarni_AUG_2022.fld/header.html\") ecn;}\n@page WordSection1\n\t{size:612.0pt 792.0pt;\n\tmargin:36.0pt 72.0pt 36.0pt 72.0pt;\n\tmso-header-margin:36.0pt;\n\tmso-footer-margin:36.0pt;\n\tmso-paper-source:0;}\ndiv.WordSection1\n\t{page:WordSection1;}\n /* List Definitions */\n @list l0\n\t{mso-list-id:88283799;\n\tmso-list-type:hybrid;\n\tmso-list-template-ids:-484677226 67698703 67698713 67698715 67698703 67698713 67698715 67698703 67698713 67698715;}\n@list l0:level1\n\t{mso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;}\n@list l0:level2\n\t{mso-level-number-format:alpha-lower;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;}\n@list l0:level3\n\t{mso-level-number-format:roman-lower;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:right;\n\ttext-indent:-9.0pt;}\n@list l0:level4\n\t{mso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;}\n@list l0:level5\n\t{mso-level-number-format:alpha-lower;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;}\n@list l0:level6\n\t{mso-level-number-format:roman-lower;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:right;\n\ttext-indent:-9.0pt;}\n@list l0:level7\n\t{mso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;}\n@list l0:level8\n\t{mso-level-number-format:alpha-lower;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;}\n@list l0:level9\n\t{mso-level-number-format:roman-lower;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:right;\n\ttext-indent:-9.0pt;}\n@list l1\n\t{mso-list-id:208079334;\n\tmso-list-type:hybrid;\n\tmso-list-template-ids:-1370595100 67698693 67698691 67698693 67698689 67698691 67698693 67698689 67698691 67698693;}\n@list l1:level1\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;\n\tfont-family:Wingdings;}\n@list l1:level2\n\t{mso-level-number-format:bullet;\n\tmso-level-text:o;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;\n\tfont-family:\"Courier New\";}\n@list l1:level3\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;\n\tfont-family:Wingdings;}\n@list l1:level4\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;\n\tfont-family:Symbol;}\n@list l1:level5\n\t{mso-level-number-format:bullet;\n\tmso-level-text:o;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;\n\tfont-family:\"Courier New\";}\n@list l1:level6\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;\n\tfont-family:Wingdings;}\n@list l1:level7\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;\n\tfont-family:Symbol;}\n@list l1:level8\n\t{mso-level-number-format:bullet;\n\tmso-level-text:o;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;\n\tfont-family:\"Courier New\";}\n@list l1:level9\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;\n\tfont-family:Wingdings;}\n@list l2\n\t{mso-list-id:256326522;\n\tmso-list-type:hybrid;\n\tmso-list-template-ids:-107723710 756958004 -1617899880 928021404 1951294110 -772377154 1437255854 975875882 1411130564 -527688496;}\n@list l2:level1\n\t{mso-level-number-format:image;\n\tlist-style-image:url(\"Resume_Sameer_Kulkarni_AUG_2022.fld/image001.jpg\");\n\tmso-level-text:•;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:37.2pt;\n\ttext-indent:0cm;\n\tmso-ansi-font-size:11.0pt;\n\tmso-bidi-font-size:11.0pt;\n\tmso-ascii-font-family:Calibri;\n\tmso-fareast-font-family:Calibri;\n\tmso-hansi-font-family:Calibri;\n\tmso-bidi-font-family:Calibri;\n\tcolor:black;\n\tborder:none;\n\tmso-ansi-font-weight:normal;\n\tmso-ansi-font-style:normal;\n\ttext-underline:black;\n\ttext-decoration:none;\n\ttext-underline:none;\n\ttext-decoration:none;\n\ttext-line-through:none;\n\tvertical-align:baseline;}\n@list l2:level2\n\t{mso-level-number-format:bullet;\n\tmso-level-text:o;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:90.9pt;\n\ttext-indent:0cm;\n\tmso-ansi-font-size:11.0pt;\n\tmso-bidi-font-size:11.0pt;\n\tmso-ascii-font-family:Calibri;\n\tmso-fareast-font-family:Calibri;\n\tmso-hansi-font-family:Calibri;\n\tmso-bidi-font-family:Calibri;\n\tcolor:black;\n\tborder:none;\n\tmso-ansi-font-weight:normal;\n\tmso-ansi-font-style:normal;\n\ttext-underline:black;\n\ttext-decoration:none;\n\ttext-underline:none;\n\ttext-decoration:none;\n\ttext-line-through:none;\n\tvertical-align:baseline;}\n@list l2:level3\n\t{mso-level-number-format:bullet;\n\tmso-level-text:▪;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:126.9pt;\n\ttext-indent:0cm;\n\tmso-ansi-font-size:11.0pt;\n\tmso-bidi-font-size:11.0pt;\n\tmso-ascii-font-family:Calibri;\n\tmso-fareast-font-family:Calibri;\n\tmso-hansi-font-family:Calibri;\n\tmso-bidi-font-family:Calibri;\n\tcolor:black;\n\tborder:none;\n\tmso-ansi-font-weight:normal;\n\tmso-ansi-font-style:normal;\n\ttext-underline:black;\n\ttext-decoration:none;\n\ttext-underline:none;\n\ttext-decoration:none;\n\ttext-line-through:none;\n\tvertical-align:baseline;}\n@list l2:level4\n\t{mso-level-number-format:bullet;\n\tmso-level-text:•;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:162.9pt;\n\ttext-indent:0cm;\n\tmso-ansi-font-size:11.0pt;\n\tmso-bidi-font-size:11.0pt;\n\tmso-ascii-font-family:Calibri;\n\tmso-fareast-font-family:Calibri;\n\tmso-hansi-font-family:Calibri;\n\tmso-bidi-font-family:Calibri;\n\tcolor:black;\n\tborder:none;\n\tmso-ansi-font-weight:normal;\n\tmso-ansi-font-style:normal;\n\ttext-underline:black;\n\ttext-decoration:none;\n\ttext-underline:none;\n\ttext-decoration:none;\n\ttext-line-through:none;\n\tvertical-align:baseline;}\n@list l2:level5\n\t{mso-level-number-format:bullet;\n\tmso-level-text:o;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:198.9pt;\n\ttext-indent:0cm;\n\tmso-ansi-font-size:11.0pt;\n\tmso-bidi-font-size:11.0pt;\n\tmso-ascii-font-family:Calibri;\n\tmso-fareast-font-family:Calibri;\n\tmso-hansi-font-family:Calibri;\n\tmso-bidi-font-family:Calibri;\n\tcolor:black;\n\tborder:none;\n\tmso-ansi-font-weight:normal;\n\tmso-ansi-font-style:normal;\n\ttext-underline:black;\n\ttext-decoration:none;\n\ttext-underline:none;\n\ttext-decoration:none;\n\ttext-line-through:none;\n\tvertical-align:baseline;}\n@list l2:level6\n\t{mso-level-number-format:bullet;\n\tmso-level-text:▪;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:234.9pt;\n\ttext-indent:0cm;\n\tmso-ansi-font-size:11.0pt;\n\tmso-bidi-font-size:11.0pt;\n\tmso-ascii-font-family:Calibri;\n\tmso-fareast-font-family:Calibri;\n\tmso-hansi-font-family:Calibri;\n\tmso-bidi-font-family:Calibri;\n\tcolor:black;\n\tborder:none;\n\tmso-ansi-font-weight:normal;\n\tmso-ansi-font-style:normal;\n\ttext-underline:black;\n\ttext-decoration:none;\n\ttext-underline:none;\n\ttext-decoration:none;\n\ttext-line-through:none;\n\tvertical-align:baseline;}\n@list l2:level7\n\t{mso-level-number-format:bullet;\n\tmso-level-text:•;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:270.9pt;\n\ttext-indent:0cm;\n\tmso-ansi-font-size:11.0pt;\n\tmso-bidi-font-size:11.0pt;\n\tmso-ascii-font-family:Calibri;\n\tmso-fareast-font-family:Calibri;\n\tmso-hansi-font-family:Calibri;\n\tmso-bidi-font-family:Calibri;\n\tcolor:black;\n\tborder:none;\n\tmso-ansi-font-weight:normal;\n\tmso-ansi-font-style:normal;\n\ttext-underline:black;\n\ttext-decoration:none;\n\ttext-underline:none;\n\ttext-decoration:none;\n\ttext-line-through:none;\n\tvertical-align:baseline;}\n@list l2:level8\n\t{mso-level-number-format:bullet;\n\tmso-level-text:o;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:306.9pt;\n\ttext-indent:0cm;\n\tmso-ansi-font-size:11.0pt;\n\tmso-bidi-font-size:11.0pt;\n\tmso-ascii-font-family:Calibri;\n\tmso-fareast-font-family:Calibri;\n\tmso-hansi-font-family:Calibri;\n\tmso-bidi-font-family:Calibri;\n\tcolor:black;\n\tborder:none;\n\tmso-ansi-font-weight:normal;\n\tmso-ansi-font-style:normal;\n\ttext-underline:black;\n\ttext-decoration:none;\n\ttext-underline:none;\n\ttext-decoration:none;\n\ttext-line-through:none;\n\tvertical-align:baseline;}\n@list l2:level9\n\t{mso-level-number-format:bullet;\n\tmso-level-text:▪;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:342.9pt;\n\ttext-indent:0cm;\n\tmso-ansi-font-size:11.0pt;\n\tmso-bidi-font-size:11.0pt;\n\tmso-ascii-font-family:Calibri;\n\tmso-fareast-font-family:Calibri;\n\tmso-hansi-font-family:Calibri;\n\tmso-bidi-font-family:Calibri;\n\tcolor:black;\n\tborder:none;\n\tmso-ansi-font-weight:normal;\n\tmso-ansi-font-style:normal;\n\ttext-underline:black;\n\ttext-decoration:none;\n\ttext-underline:none;\n\ttext-decoration:none;\n\ttext-line-through:none;\n\tvertical-align:baseline;}\n@list l3\n\t{mso-list-id:263467249;\n\tmso-list-type:hybrid;\n\tmso-list-template-ids:1143484094 67698693 67698691 67698693 67698689 67698691 67698693 67698689 67698691 67698693;}\n@list l3:level1\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;\n\tfont-family:Wingdings;}\n@list l3:level2\n\t{mso-level-number-format:bullet;\n\tmso-level-text:o;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;\n\tfont-family:\"Courier New\";}\n@list l3:level3\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;\n\tfont-family:Wingdings;}\n@list l3:level4\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;\n\tfont-family:Symbol;}\n@list l3:level5\n\t{mso-level-number-format:bullet;\n\tmso-level-text:o;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;\n\tfont-family:\"Courier New\";}\n@list l3:level6\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;\n\tfont-family:Wingdings;}\n@list l3:level7\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;\n\tfont-family:Symbol;}\n@list l3:level8\n\t{mso-level-number-format:bullet;\n\tmso-level-text:o;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;\n\tfont-family:\"Courier New\";}\n@list l3:level9\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;\n\tfont-family:Wingdings;}\n@list l4\n\t{mso-list-id:394282505;\n\tmso-list-type:hybrid;\n\tmso-list-template-ids:53142300 67698693 67698691 67698693 67698689 67698691 67698693 67698689 67698691 67698693;}\n@list l4:level1\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:48.6pt;\n\ttext-indent:-18.0pt;\n\tfont-family:Wingdings;}\n@list l4:level2\n\t{mso-level-number-format:bullet;\n\tmso-level-text:o;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:84.6pt;\n\ttext-indent:-18.0pt;\n\tfont-family:\"Courier New\";}\n@list l4:level3\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:120.6pt;\n\ttext-indent:-18.0pt;\n\tfont-family:Wingdings;}\n@list l4:level4\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:156.6pt;\n\ttext-indent:-18.0pt;\n\tfont-family:Symbol;}\n@list l4:level5\n\t{mso-level-number-format:bullet;\n\tmso-level-text:o;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:192.6pt;\n\ttext-indent:-18.0pt;\n\tfont-family:\"Courier New\";}\n@list l4:level6\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:228.6pt;\n\ttext-indent:-18.0pt;\n\tfont-family:Wingdings;}\n@list l4:level7\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:264.6pt;\n\ttext-indent:-18.0pt;\n\tfont-family:Symbol;}\n@list l4:level8\n\t{mso-level-number-format:bullet;\n\tmso-level-text:o;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:300.6pt;\n\ttext-indent:-18.0pt;\n\tfont-family:\"Courier New\";}\n@list l4:level9\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:336.6pt;\n\ttext-indent:-18.0pt;\n\tfont-family:Wingdings;}\n@list l5\n\t{mso-list-id:530413180;\n\tmso-list-type:hybrid;\n\tmso-list-template-ids:1913975698 67698689 67698691 67698693 67698689 67698691 67698693 67698689 67698691 67698693;}\n@list l5:level1\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:48.6pt;\n\ttext-indent:-18.0pt;\n\tfont-family:Symbol;}\n@list l5:level2\n\t{mso-level-number-format:bullet;\n\tmso-level-text:o;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:84.6pt;\n\ttext-indent:-18.0pt;\n\tfont-family:\"Courier New\";}\n@list l5:level3\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:120.6pt;\n\ttext-indent:-18.0pt;\n\tfont-family:Wingdings;}\n@list l5:level4\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:156.6pt;\n\ttext-indent:-18.0pt;\n\tfont-family:Symbol;}\n@list l5:level5\n\t{mso-level-number-format:bullet;\n\tmso-level-text:o;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:192.6pt;\n\ttext-indent:-18.0pt;\n\tfont-family:\"Courier New\";}\n@list l5:level6\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:228.6pt;\n\ttext-indent:-18.0pt;\n\tfont-family:Wingdings;}\n@list l5:level7\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:264.6pt;\n\ttext-indent:-18.0pt;\n\tfont-family:Symbol;}\n@list l5:level8\n\t{mso-level-number-format:bullet;\n\tmso-level-text:o;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:300.6pt;\n\ttext-indent:-18.0pt;\n\tfont-family:\"Courier New\";}\n@list l5:level9\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:336.6pt;\n\ttext-indent:-18.0pt;\n\tfont-family:Wingdings;}\n@list l6\n\t{mso-list-id:587349149;\n\tmso-list-type:hybrid;\n\tmso-list-template-ids:-2001182680 67698689 67698691 67698693 67698689 67698691 67698693 67698689 67698691 67698693;}\n@list l6:level1\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;\n\tfont-family:Symbol;}\n@list l6:level2\n\t{mso-level-number-format:bullet;\n\tmso-level-text:o;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;\n\tfont-family:\"Courier New\";}\n@list l6:level3\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;\n\tfont-family:Wingdings;}\n@list l6:level4\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;\n\tfont-family:Symbol;}\n@list l6:level5\n\t{mso-level-number-format:bullet;\n\tmso-level-text:o;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;\n\tfont-family:\"Courier New\";}\n@list l6:level6\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;\n\tfont-family:Wingdings;}\n@list l6:level7\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;\n\tfont-family:Symbol;}\n@list l6:level8\n\t{mso-level-number-format:bullet;\n\tmso-level-text:o;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;\n\tfont-family:\"Courier New\";}\n@list l6:level9\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;\n\tfont-family:Wingdings;}\n@list l7\n\t{mso-list-id:887572570;\n\tmso-list-type:hybrid;\n\tmso-list-template-ids:-547349346 67698693 67698691 67698693 67698689 67698691 67698693 67698689 67698691 67698693;}\n@list l7:level1\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;\n\tfont-family:Wingdings;}\n@list l7:level2\n\t{mso-level-number-format:bullet;\n\tmso-level-text:o;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;\n\tfont-family:\"Courier New\";}\n@list l7:level3\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;\n\tfont-family:Wingdings;}\n@list l7:level4\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;\n\tfont-family:Symbol;}\n@list l7:level5\n\t{mso-level-number-format:bullet;\n\tmso-level-text:o;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;\n\tfont-family:\"Courier New\";}\n@list l7:level6\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;\n\tfont-family:Wingdings;}\n@list l7:level7\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;\n\tfont-family:Symbol;}\n@list l7:level8\n\t{mso-level-number-format:bullet;\n\tmso-level-text:o;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;\n\tfont-family:\"Courier New\";}\n@list l7:level9\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;\n\tfont-family:Wingdings;}\n@list l8\n\t{mso-list-id:897126388;\n\tmso-list-type:hybrid;\n\tmso-list-template-ids:-2134372714 67698689 67698691 67698693 67698689 67698691 67698693 67698689 67698691 67698693;}\n@list l8:level1\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:48.6pt;\n\ttext-indent:-18.0pt;\n\tfont-family:Symbol;}\n@list l8:level2\n\t{mso-level-number-format:bullet;\n\tmso-level-text:o;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:84.6pt;\n\ttext-indent:-18.0pt;\n\tfont-family:\"Courier New\";}\n@list l8:level3\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:120.6pt;\n\ttext-indent:-18.0pt;\n\tfont-family:Wingdings;}\n@list l8:level4\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:156.6pt;\n\ttext-indent:-18.0pt;\n\tfont-family:Symbol;}\n@list l8:level5\n\t{mso-level-number-format:bullet;\n\tmso-level-text:o;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:192.6pt;\n\ttext-indent:-18.0pt;\n\tfont-family:\"Courier New\";}\n@list l8:level6\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:228.6pt;\n\ttext-indent:-18.0pt;\n\tfont-family:Wingdings;}\n@list l8:level7\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:264.6pt;\n\ttext-indent:-18.0pt;\n\tfont-family:Symbol;}\n@list l8:level8\n\t{mso-level-number-format:bullet;\n\tmso-level-text:o;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:300.6pt;\n\ttext-indent:-18.0pt;\n\tfont-family:\"Courier New\";}\n@list l8:level9\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:336.6pt;\n\ttext-indent:-18.0pt;\n\tfont-family:Wingdings;}\n@list l9\n\t{mso-list-id:1041975985;\n\tmso-list-type:hybrid;\n\tmso-list-template-ids:1806980262 67698693 67698691 67698693 67698689 67698691 67698693 67698689 67698691 67698693;}\n@list l9:level1\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;\n\tfont-family:Wingdings;}\n@list l9:level2\n\t{mso-level-number-format:bullet;\n\tmso-level-text:o;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;\n\tfont-family:\"Courier New\";}\n@list l9:level3\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;\n\tfont-family:Wingdings;}\n@list l9:level4\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;\n\tfont-family:Symbol;}\n@list l9:level5\n\t{mso-level-number-format:bullet;\n\tmso-level-text:o;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;\n\tfont-family:\"Courier New\";}\n@list l9:level6\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;\n\tfont-family:Wingdings;}\n@list l9:level7\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;\n\tfont-family:Symbol;}\n@list l9:level8\n\t{mso-level-number-format:bullet;\n\tmso-level-text:o;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;\n\tfont-family:\"Courier New\";}\n@list l9:level9\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;\n\tfont-family:Wingdings;}\n@list l10\n\t{mso-list-id:1175727260;\n\tmso-list-type:hybrid;\n\tmso-list-template-ids:1369345638 67698689 67698691 67698693 67698689 67698691 67698693 67698689 67698691 67698693;}\n@list l10:level1\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:48.6pt;\n\ttext-indent:-18.0pt;\n\tfont-family:Symbol;}\n@list l10:level2\n\t{mso-level-number-format:bullet;\n\tmso-level-text:o;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:84.6pt;\n\ttext-indent:-18.0pt;\n\tfont-family:\"Courier New\";}\n@list l10:level3\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:120.6pt;\n\ttext-indent:-18.0pt;\n\tfont-family:Wingdings;}\n@list l10:level4\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:156.6pt;\n\ttext-indent:-18.0pt;\n\tfont-family:Symbol;}\n@list l10:level5\n\t{mso-level-number-format:bullet;\n\tmso-level-text:o;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:192.6pt;\n\ttext-indent:-18.0pt;\n\tfont-family:\"Courier New\";}\n@list l10:level6\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:228.6pt;\n\ttext-indent:-18.0pt;\n\tfont-family:Wingdings;}\n@list l10:level7\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:264.6pt;\n\ttext-indent:-18.0pt;\n\tfont-family:Symbol;}\n@list l10:level8\n\t{mso-level-number-format:bullet;\n\tmso-level-text:o;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:300.6pt;\n\ttext-indent:-18.0pt;\n\tfont-family:\"Courier New\";}\n@list l10:level9\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:336.6pt;\n\ttext-indent:-18.0pt;\n\tfont-family:Wingdings;}\n@list l11\n\t{mso-list-id:1467623181;\n\tmso-list-type:hybrid;\n\tmso-list-template-ids:-1810312766 1074331663 1074331673 1074331675 1074331663 1074331673 1074331675 1074331663 1074331673 1074331675;}\n@list l11:level1\n\t{mso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:89.55pt;\n\ttext-indent:-18.0pt;}\n@list l11:level2\n\t{mso-level-number-format:alpha-lower;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:125.55pt;\n\ttext-indent:-18.0pt;}\n@list l11:level3\n\t{mso-level-number-format:roman-lower;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:right;\n\tmargin-left:161.55pt;\n\ttext-indent:-9.0pt;}\n@list l11:level4\n\t{mso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:197.55pt;\n\ttext-indent:-18.0pt;}\n@list l11:level5\n\t{mso-level-number-format:alpha-lower;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:233.55pt;\n\ttext-indent:-18.0pt;}\n@list l11:level6\n\t{mso-level-number-format:roman-lower;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:right;\n\tmargin-left:269.55pt;\n\ttext-indent:-9.0pt;}\n@list l11:level7\n\t{mso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:305.55pt;\n\ttext-indent:-18.0pt;}\n@list l11:level8\n\t{mso-level-number-format:alpha-lower;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:341.55pt;\n\ttext-indent:-18.0pt;}\n@list l11:level9\n\t{mso-level-number-format:roman-lower;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:right;\n\tmargin-left:377.55pt;\n\ttext-indent:-9.0pt;}\n@list l12\n\t{mso-list-id:1489512684;\n\tmso-list-type:hybrid;\n\tmso-list-template-ids:-227612226 67698689 67698691 67698693 67698689 67698691 67698693 67698689 67698691 67698693;}\n@list l12:level1\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;\n\tfont-family:Symbol;}\n@list l12:level2\n\t{mso-level-number-format:bullet;\n\tmso-level-text:o;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;\n\tfont-family:\"Courier New\";}\n@list l12:level3\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;\n\tfont-family:Wingdings;}\n@list l12:level4\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;\n\tfont-family:Symbol;}\n@list l12:level5\n\t{mso-level-number-format:bullet;\n\tmso-level-text:o;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;\n\tfont-family:\"Courier New\";}\n@list l12:level6\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;\n\tfont-family:Wingdings;}\n@list l12:level7\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;\n\tfont-family:Symbol;}\n@list l12:level8\n\t{mso-level-number-format:bullet;\n\tmso-level-text:o;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;\n\tfont-family:\"Courier New\";}\n@list l12:level9\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;\n\tfont-family:Wingdings;}\n@list l13\n\t{mso-list-id:1881043608;\n\tmso-list-type:hybrid;\n\tmso-list-template-ids:153661734 67698693 67698691 67698693 67698689 67698691 67698693 67698689 67698691 67698693;}\n@list l13:level1\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:48.6pt;\n\ttext-indent:-18.0pt;\n\tfont-family:Wingdings;}\n@list l13:level2\n\t{mso-level-number-format:bullet;\n\tmso-level-text:o;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:84.6pt;\n\ttext-indent:-18.0pt;\n\tfont-family:\"Courier New\";}\n@list l13:level3\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:120.6pt;\n\ttext-indent:-18.0pt;\n\tfont-family:Wingdings;}\n@list l13:level4\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:156.6pt;\n\ttext-indent:-18.0pt;\n\tfont-family:Symbol;}\n@list l13:level5\n\t{mso-level-number-format:bullet;\n\tmso-level-text:o;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:192.6pt;\n\ttext-indent:-18.0pt;\n\tfont-family:\"Courier New\";}\n@list l13:level6\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:228.6pt;\n\ttext-indent:-18.0pt;\n\tfont-family:Wingdings;}\n@list l13:level7\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:264.6pt;\n\ttext-indent:-18.0pt;\n\tfont-family:Symbol;}\n@list l13:level8\n\t{mso-level-number-format:bullet;\n\tmso-level-text:o;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:300.6pt;\n\ttext-indent:-18.0pt;\n\tfont-family:\"Courier New\";}\n@list l13:level9\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:336.6pt;\n\ttext-indent:-18.0pt;\n\tfont-family:Wingdings;}\n@list l14\n\t{mso-list-id:2094936513;\n\tmso-list-type:hybrid;\n\tmso-list-template-ids:1290180306 2110789482 -1812590 251018784 -1570183284 -2073397296 -515895884 275010422 1657586420 -1310922308;}\n@list l14:level1\n\t{mso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;\n\tmso-ansi-font-weight:normal;\n\tmso-bidi-font-weight:normal;}\n@list l14:level2\n\t{mso-level-number-format:alpha-lower;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;}\n@list l14:level3\n\t{mso-level-number-format:roman-lower;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:right;\n\ttext-indent:-9.0pt;}\n@list l14:level4\n\t{mso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;}\n@list l14:level5\n\t{mso-level-number-format:alpha-lower;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;}\n@list l14:level6\n\t{mso-level-number-format:roman-lower;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:right;\n\ttext-indent:-9.0pt;}\n@list l14:level7\n\t{mso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;}\n@list l14:level8\n\t{mso-level-number-format:alpha-lower;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;}\n@list l14:level9\n\t{mso-level-number-format:roman-lower;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:right;\n\ttext-indent:-9.0pt;}\n@list l15\n\t{mso-list-id:2097628057;\n\tmso-list-type:hybrid;\n\tmso-list-template-ids:-518219140 -1 67698691 67698693 67698689 67698691 67698693 67698689 67698691 67698693;}\n@list l15:level1\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;\n\tfont-family:Symbol;}\n@list l15:level2\n\t{mso-level-number-format:bullet;\n\tmso-level-text:o;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;\n\tfont-family:\"Courier New\";}\n@list l15:level3\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;\n\tfont-family:Wingdings;}\n@list l15:level4\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;\n\tfont-family:Symbol;}\n@list l15:level5\n\t{mso-level-number-format:bullet;\n\tmso-level-text:o;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;\n\tfont-family:\"Courier New\";}\n@list l15:level6\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;\n\tfont-family:Wingdings;}\n@list l15:level7\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;\n\tfont-family:Symbol;}\n@list l15:level8\n\t{mso-level-number-format:bullet;\n\tmso-level-text:o;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;\n\tfont-family:\"Courier New\";}\n@list l15:level9\n\t{mso-level-number-format:bullet;\n\tmso-level-text:;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\ttext-indent:-18.0pt;\n\tfont-family:Wingdings;}\nol\n\t{margin-bottom:0cm;}\nul\n\t{margin-bottom:0cm;}\n-->\n" }} />
      {/*[if gte mso 10]>
<style>
/* Style Definitions * /
table.MsoNormalTable
{mso-style-name:"Table Normal";
mso-tstyle-rowband-size:0;
mso-tstyle-colband-size:0;
mso-style-noshow:yes;
mso-style-priority:99;
mso-style-parent:"";
mso-padding-alt:0cm 5.4pt 0cm 5.4pt;
mso-para-margin:0cm;
mso-pagination:widow-orphan;
font-size:10.0pt;
font-family:"Calibri",sans-serif;
mso-bidi-font-family:"Times New Roman";
mso-ansi-language:EN-US;
mso-fareast-language:JA;}
table.MsoTableGrid
{mso-style-name:"Table Grid";
mso-tstyle-rowband-size:0;
mso-tstyle-colband-size:0;
mso-style-priority:59;
mso-style-unhide:no;
border:solid windowtext 1.0pt;
mso-border-alt:solid windowtext .5pt;
mso-padding-alt:0cm 5.4pt 0cm 5.4pt;
mso-border-insideh:.5pt solid windowtext;
mso-border-insidev:.5pt solid windowtext;
mso-para-margin:0cm;
mso-pagination:widow-orphan;
font-size:10.0pt;
font-family:"Calibri",sans-serif;
mso-bidi-font-family:"Times New Roman";
mso-ansi-language:EN-US;
mso-fareast-language:JA;}
table.TableGrid
{mso-style-name:TableGrid;
mso-tstyle-rowband-size:0;
mso-tstyle-colband-size:0;
mso-style-unhide:no;
mso-style-parent:"";
mso-padding-alt:0cm 0cm 0cm 0cm;
mso-para-margin:0cm;
mso-pagination:widow-orphan;
font-size:11.0pt;
font-family:"Calibri",sans-serif;
mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;
mso-fareast-font-family:"MS Mincho";
mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;
mso-hansi-theme-font:minor-latin;
mso-bidi-font-family:Mangal;
mso-bidi-theme-font:minor-bidi;
mso-ansi-language:EN-US;
mso-fareast-language:JA;}
</style>
<![endif]*/}{/*[if gte mso 9]><xml>
<o:shapedefaults v:ext="edit" spidmax="1026"/>
</xml><![endif]*/}{/*[if gte mso 9]><xml>
<o:shapelayout v:ext="edit">
<o:idmap v:ext="edit" data="1"/>
</o:shapelayout></xml><![endif]*/}
      <table className="MsoNormalTable" border={0} cellSpacing={0} cellPadding={0} width={696} style={{width: '522.0pt', marginLeft: '-26.1pt', borderCollapse: 'collapse', msoYftiTbllook: 1184, msoPaddingAlt: '0cm 5.4pt 0cm 5.4pt', msoBorderInsidev: '.5pt solid windowtext'}}>
        <tbody><tr style={{msoYftiIrow: 1}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{msoBidiFontSize: '10.0pt', fontFamily: '"Cambria",serif'}}><o:p>&nbsp;</o:p></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '0cm', marginLeft: '12.6pt', lineHeight: 'normal'}}><b><span lang="EN-US" style={{fontSize: '14.0pt', fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria', color: '#A6A6A6', msoThemecolor: 'background1', msoThemeshade: 166}}>Personal Information</span></b><b><span lang="EN-US" style={{fontFamily: '"Cambria",serif', color: '#A6A6A6', msoThemecolor: 'background1', msoThemeshade: 166}}><o:p /></span></b></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 2}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontSize: '10.0pt', fontFamily: '"Cambria",serif'}}><o:p>&nbsp;</o:p></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '0cm', marginLeft: '12.6pt', lineHeight: 'normal'}}><span lang="EN-US" style={{fontSize: '10.0pt', fontFamily: '"Cambria",serif'}}><o:p>&nbsp;</o:p></span></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 3}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>First name/Last name</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" style={{marginTop: '1.0pt', marginRight: '0cm', marginBottom: '1.0pt', marginLeft: '12.6pt'}}><b><span lang="EN-GB" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria', msoAnsiLanguage: 'EN-GB'}}>Sameer Kulkarni</span></b><b><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></b></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 4}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p>&nbsp;</o:p></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" style={{marginTop: '1.0pt', marginRight: '0cm', marginBottom: '1.0pt', marginLeft: '12.6pt'}}><span lang="EN-GB" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria', msoAnsiLanguage: 'EN-GB'}}><o:p>&nbsp;</o:p></span></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 7}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Website<o:p /></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" style={{marginTop: '1.0pt', marginRight: '0cm', marginBottom: '1.0pt', marginLeft: '12.6pt'}}><span lang="EN-US"><a href="https://sameerkulkarni.de/"><span lang="EN-GB" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria', msoAnsiLanguage: 'EN-GB'}}>https://sameerkulkarni.de</span></a></span><span lang="EN-GB" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria', msoAnsiLanguage: 'EN-GB'}}><o:p /></span></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 9, height: '4.9pt'}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '4.9pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontSize: '10.0pt', fontFamily: '"Cambria",serif'}}><o:p>&nbsp;</o:p></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '4.9pt'}}>
              <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '0cm', marginLeft: '12.6pt', lineHeight: 'normal'}}><span lang="EN-US" style={{fontSize: '10.0pt', fontFamily: '"Cambria",serif'}}><o:p>&nbsp;</o:p></span></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 10, height: '4.9pt'}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '4.9pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{msoBidiFontSize: '10.0pt', fontFamily: '"Cambria",serif'}}><o:p>&nbsp;</o:p></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '4.9pt'}}>
              <p className="MsoNormal" style={{marginTop: '1.0pt', marginRight: '0cm', marginBottom: '1.0pt', marginLeft: '12.6pt', lineHeight: 'normal'}}><b><span lang="EN-US" style={{fontSize: '14.0pt', fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria', color: '#A6A6A6', msoThemecolor: 'background1', msoThemeshade: 166}}>Key Skills</span></b><span lang="EN-GB" style={{fontSize: '10.0pt', fontFamily: '"Cambria",serif', msoAnsiLanguage: 'EN-GB'}}><o:p /></span></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 11, height: '4.9pt'}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '4.9pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontSize: '10.0pt', fontFamily: '"Cambria",serif'}}><o:p>&nbsp;</o:p></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '4.9pt'}}>
              <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '0cm', marginLeft: '12.6pt', lineHeight: 'normal'}}><span lang="EN-US" style={{fontSize: '10.0pt', fontFamily: '"Cambria",serif'}}><o:p>&nbsp;</o:p></span></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 12, height: '4.9pt'}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '4.9pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Programming Languages, Frameworks, Technologies
                  &amp; Tools</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '4.9pt'}}>
              <p className="MsoNormal" style={{marginTop: '1.0pt', marginRight: '0cm', marginBottom: '1.0pt', marginLeft: '12.6pt', textAlign: 'justify'}}><span lang="EN-GB" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria', msoAnsiLanguage: 'EN-GB'}}>Core Java, Spring Boot,
                  Spring MVC, J2EE, Amazon Web <span className="GramE">Services(</span>AWS), GitHub
                  Actions, Docker, YAML, Kotlin, <span className="SpellE">Vaadin</span> Framework,
                  Python, GWT, JSF, Hibernate, JPA, Swing Framework, JSPs, AOP, Java Script,
                  Helm, Kubernetes, Visual C# .NET, C, C++, Maven, Gradle, Jenkins Management,
                  Zabbix Monitoring Tools, Elastic Search, Shell Scripting,<span style={{msoSpacerun: 'yes'}}>&nbsp; </span>Kibana, Tomcat, Agile Method (Scrum)</span><span lang="EN-GB" style={{fontSize: '10.0pt', lineHeight: '115%', fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria', msoAnsiLanguage: 'EN-GB'}}><o:p /></span></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 13, height: '4.9pt'}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '4.9pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Databases</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '4.9pt'}}>
              <p className="MsoNormal" style={{marginTop: '1.0pt', marginRight: '0cm', marginBottom: '1.0pt', marginLeft: '12.6pt', textAlign: 'justify', lineHeight: 'normal'}}><span lang="EN-GB" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria', msoAnsiLanguage: 'EN-GB'}}>PostgreSQL, DB2, Oracle
                  9i/10g, MySQL, Derby, SQL Server</span><span lang="EN-GB" style={{fontSize: '10.0pt', fontFamily: '"Cambria",serif', msoAnsiLanguage: 'EN-GB'}}><o:p /></span></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 14, height: '4.9pt'}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '4.9pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Operating Systems</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '4.9pt'}}>
              <p className="MsoNormal" style={{marginTop: '1.0pt', marginRight: '0cm', marginBottom: '1.0pt', marginLeft: '12.6pt', textAlign: 'justify', lineHeight: 'normal'}}><span lang="EN-GB" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria', msoAnsiLanguage: 'EN-GB'}}>MacOS, Linux, Microsoft
                  Windows</span><span lang="EN-GB" style={{fontFamily: '"Cambria",serif', msoAnsiLanguage: 'EN-GB'}}><o:p /></span></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 15, height: '4.9pt'}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '4.9pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Mobile Technologies</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '4.9pt'}}>
              <p className="MsoNormal" style={{marginTop: '1.0pt', marginRight: '0cm', marginBottom: '1.0pt', marginLeft: '12.6pt', textAlign: 'justify', lineHeight: 'normal'}}><span lang="EN-GB" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria', msoAnsiLanguage: 'EN-GB'}}>Android Application
                  Development</span><span lang="EN-GB" style={{fontFamily: '"Cambria",serif', msoAnsiLanguage: 'EN-GB'}}><o:p /></span></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 16, height: '4.9pt'}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '4.9pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontSize: '10.0pt', fontFamily: '"Cambria",serif'}}><o:p>&nbsp;</o:p></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '4.9pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontSize: '10.0pt', fontFamily: '"Cambria",serif'}}><o:p>&nbsp;</o:p></span></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 17}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{msoBidiFontSize: '10.0pt', fontFamily: '"Cambria",serif'}}><o:p>&nbsp;</o:p></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '0cm', marginLeft: '12.6pt', lineHeight: 'normal'}}><b><span lang="EN-US" style={{fontSize: '14.0pt', fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria', color: '#A6A6A6', msoThemecolor: 'background1', msoThemeshade: 166}}>Work Experience</span></b><b><span lang="EN-US" style={{fontSize: '10.0pt', fontFamily: '"Cambria",serif', color: '#A6A6A6', msoThemecolor: 'background1', msoThemeshade: 166}}><o:p /></span></b></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 18}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontSize: '10.0pt', fontFamily: '"Cambria",serif'}}><o:p>&nbsp;</o:p></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontSize: '10.0pt', fontFamily: '"Cambria",serif'}}><o:p>&nbsp;</o:p></span></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 19}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}>Name of employer<o:p /></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '0cm', marginLeft: '12.6pt'}}><b><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Delivery Hero,</span></b><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}> Berlin, Germany<o:p /></span></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 20}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}>Position held<o:p /></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '0cm', marginLeft: '12.6pt'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Senior Backend
                  Engineer<o:p /></span></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 21}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}>Duration<o:p /></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '0cm', marginLeft: '12.6pt'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Since March 2022
                  <o:p /></span></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 22}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}>Main activities<o:p /></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <ul style={{marginTop: '0cm'}} type="disc">
                <li className="MsoNormal" style={{marginBottom: '0cm', textAlign: 'justify', msoList: 'l6 level1 lfo3'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Designed a
                    solution together with the team that optimizes, manual process of
                    setting up delivery prices by pricing managers using Kotlin, Apache
                    Kafka (MSK), Google <span className="SpellE">BigQuery</span>, Kubernetes, Helm
                    on AWS Cloud.<o:p /></span></li>
                <li className="MsoNormal" style={{marginBottom: '0cm', textAlign: 'justify', msoList: 'l6 level1 lfo3'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Used
                    Terraform for setting up Spinnaker deployment pipelines.<o:p /></span></li>
                <li className="MsoNormal" style={{marginBottom: '0cm', textAlign: 'justify', msoList: 'l6 level1 lfo3'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Onboarded
                    new team members.<o:p /></span></li>
              </ul>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 23}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Technology/IDE Used</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '0cm', marginLeft: '12.6pt'}}><b><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Kotlin, Spring
                    Boot, AWS, Kafka, Drone, Gradle, Spinnaker, Helm, Kubernetes<o:p /></span></b></p>
              <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '0cm', marginLeft: '12.6pt'}}><b><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}><o:p>&nbsp;</o:p></span></b></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 24}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontSize: '10.0pt', fontFamily: '"Cambria",serif'}}><o:p>&nbsp;</o:p></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '0cm', marginLeft: '12.6pt'}}><u><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}><o:p><span style={{textDecoration: 'none'}}>&nbsp;</span></o:p></span></u></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 25}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}>Name of employer</span><span lang="EN-US" style={{fontSize: '10.0pt', fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '0cm', marginLeft: '12.6pt'}}><b><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Tignum GmbH,</span></b><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}> Berlin, Germany<u><o:p /></u></span></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 26}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}>Position held</span><span lang="EN-US" style={{fontSize: '10.0pt', fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '0cm', marginLeft: '12.6pt'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Senior Software
                  Engineer<u><o:p /></u></span></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 27}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}>Duration<o:p /></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '0cm', marginLeft: '12.6pt'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>January 2018 –
                  February 2022<o:p /></span></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 28}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}>Main activities<o:p /></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '0cm', marginLeft: '12.6pt'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Development of
                  Spring Boot and Spring MVC Web Services (REST APIs) using J2EE Components</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 29}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p>&nbsp;</o:p></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '0cm', marginLeft: '12.6pt'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Project has
                  interaction of REST APIs to external applications</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 30}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p>&nbsp;</o:p></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <ul style={{marginTop: '0cm'}} type="disc">
                <li className="MsoNormal" style={{marginBottom: '0cm', textAlign: 'justify', msoList: 'l6 level1 lfo3'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Worked on
                    Android Application using Kotlin to develop interface that connects the
                    app with Backend Services<o:p /></span></li>
              </ul>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 31}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{msoBidiFontSize: '10.0pt', fontFamily: '"Cambria",serif'}}><o:p>&nbsp;</o:p></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <ul style={{marginTop: '0cm'}} type="disc">
                <li className="MsoNormal" style={{marginBottom: '0cm', textAlign: 'justify', msoList: 'l6 level1 lfo3'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>CI/CD
                    migration from Jenkins to GitHub Actions <o:p /></span></li>
                <li className="MsoNormal" style={{marginBottom: '0cm', textAlign: 'justify', msoList: 'l6 level1 lfo3'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Prototyping
                    Backend Kotlin Project with <span className="SpellE">Ktor</span> <o:p /></span></li>
              </ul>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 32}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{msoBidiFontSize: '10.0pt', fontFamily: '"Cambria",serif'}}><o:p>&nbsp;</o:p></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <ul style={{marginTop: '0cm'}} type="disc">
                <li className="MsoNormal" style={{marginBottom: '0cm', textAlign: 'justify', msoList: 'l6 level1 lfo3'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Developed <span className="SpellE">jMeter</span> tests for load testing of Backend Services<o:p /></span></li>
                <li className="MsoNormal" style={{marginBottom: '0cm', textAlign: 'justify', msoList: 'l6 level1 lfo3'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Mentoring
                    team members<o:p /></span></li>
              </ul>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 33}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Technology/IDE Used</span><span lang="EN-US" style={{msoBidiFontSize: '10.0pt', fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <ul style={{marginTop: '0cm'}} type="disc">
                <li className="MsoNormal" style={{marginBottom: '0cm', textAlign: 'justify', msoList: 'l6 level1 lfo3'}}><b><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>J2EE, Spring
                      Boot, Spring MVC, Android Development, Kotlin, Python, AWS, SQS, RDS,
                      EC2, Jenkins, Maven, Gradle, IntelliJ, JPA – Hibernate, PostgreSQL,
                      Elastic Search, Kibana, <span className="SpellE">Github</span> Actions</span></b></li>
              </ul>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 34}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontSize: '10.0pt', fontFamily: '"Cambria",serif'}}><o:p>&nbsp;</o:p></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontSize: '10.0pt', fontFamily: '"Cambria",serif'}}><o:p>&nbsp;</o:p></span></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 35}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Name of employer</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '0cm', marginLeft: '12.6pt'}}><span className="SpellE"><b><span lang="DE" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria', msoAnsiLanguage: 'DE'}}>Jesta</span></b></span><b><span lang="DE" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria', msoAnsiLanguage: 'DE'}}> Digital GmbH</span></b><span lang="DE" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria', msoAnsiLanguage: 'DE'}}>, Berlin, Germany<o:p /></span></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 36}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Position held</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '0cm', marginLeft: '12.6pt'}}><span lang="DE" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria', msoAnsiLanguage: 'DE'}}>Masterarbeit (Master Thesis)</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 37}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Duration</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '0cm', marginLeft: '12.6pt'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>September 2011
                  – March 2012</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 38}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Main activities </span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <ul style={{marginTop: '0cm'}} type="disc">
                <li className="MsoNormal" style={{marginBottom: '0cm', textAlign: 'justify', msoList: 'l15 level1 lfo11'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Worked on
                    master thesis topic, "<span className="SpellE"><i>Automization</i></span><i>
                      of the Java EE Server monitoring configuration using RESTful APIs.</i>"<o:p /></span></li>
              </ul>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 39}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{msoBidiFontSize: '10.0pt', fontFamily: '"Cambria",serif'}}><o:p>&nbsp;</o:p></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <ul style={{marginTop: '0cm'}} type="disc">
                <li className="MsoNormal" style={{marginBottom: '0cm', textAlign: 'justify', msoList: 'l6 level1 lfo3'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Developed
                    a Command Line Tool to perform Bulk Operations over Monitoring Server
                    using RESTful APIs<o:p /></span></li>
              </ul>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 40}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Technology/IDE Used</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoListParagraph" style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '2.4pt', marginLeft: '11.7pt', msoAddSpace: 'auto', lineHeight: '115%'}}><b><span lang="EN-US" style={{fontSize: '11.0pt', lineHeight: '115%', fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria', color: 'black', msoThemecolor: 'text1'}}><span style={{msoSpacerun: 'yes'}}>&nbsp;</span>J2EE, Wickets
                    Framework, JPA- Hibernate, JUnit, Zabbix Monitoring System, REST <span className="SpellE">api</span> from Zabbix, Eclipse<o:p /></span></b></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 41}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontSize: '10.0pt', fontFamily: '"Cambria",serif'}}><o:p>&nbsp;</o:p></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontSize: '10.0pt', fontFamily: '"Cambria",serif'}}><o:p>&nbsp;</o:p></span></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 42}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Name of employer</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '0cm', marginLeft: '11.7pt'}}><b><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Texas
                    Instruments GmbH</span></b><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>, Freising,
                  Germany</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 43}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Position held</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '0cm', marginLeft: '11.7pt'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Web Application
                  Developer Intern</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 44}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Duration</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '0cm', marginLeft: '36.0pt', textIndent: '-24.3pt'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>March
                  2011 – August 2011</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 45}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Main activities </span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <ul style={{marginTop: '0cm'}} type="disc">
                <li className="MsoNormal" style={{marginBottom: '0cm', textAlign: 'justify', msoList: 'l15 level1 lfo11'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Managed <i>Equipment
                      Reservation Tool</i> Application, which was mainly used to reserve
                    Testing time, Engineering time for wafer testing process<o:p /></span></li>
              </ul>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 46}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{msoBidiFontSize: '10.0pt', fontFamily: '"Cambria",serif'}}><o:p>&nbsp;</o:p></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <ul style={{marginTop: '0cm'}} type="disc">
                <li className="MsoNormal" style={{marginBottom: '0cm', textAlign: 'justify', msoList: 'l12 level1 lfo12'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Developed
                    a Cron Scheduler which loads data to local database from remote data
                    warehouse<o:p /></span></li>
              </ul>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 47}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{msoBidiFontSize: '10.0pt', fontFamily: '"Cambria",serif'}}><o:p>&nbsp;</o:p></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <ul style={{marginTop: '0cm'}} type="disc">
                <li className="MsoNormal" style={{marginBottom: '0cm', textAlign: 'justify', msoList: 'l12 level1 lfo12'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Performed
                    SQL Query Tuning tasks as well<o:p /></span></li>
              </ul>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 48}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Technology/IDE Used</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '0cm', marginLeft: '11.7pt'}}><b><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>JSPs, jQuery
                    Framework, JUnit, UML tools, PHP, <span className="SpellE">Netbeans</span></span></b><b><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></b></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 49}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontSize: '10.0pt', fontFamily: '"Cambria",serif'}}><o:p>&nbsp;</o:p></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontSize: '10.0pt', fontFamily: '"Cambria",serif'}}><o:p>&nbsp;</o:p></span></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 50}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Name of employer</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '0cm', marginLeft: '11.7pt'}}><span className="SpellE"><b><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>SoftCorner</span></b></span><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>, Pune, India<o:p /></span></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 51}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Clients</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '0cm', marginLeft: '11.7pt'}}><b><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>LOYAL3</span></b><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>,<b> </b>USA<b> </b>&amp;<b> <span className="SpellE">Datagenuis</span></b>,<b> </b>USA<b><o:p /></b></span></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 52}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Position held</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '0cm', marginLeft: '11.7pt'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Software
                  Engineer</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 53}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Duration</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '0cm', marginLeft: '36.0pt', textIndent: '-24.3pt'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>September
                  2008 – December 2009</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 54}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Main activities </span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <ul style={{marginTop: '0cm'}} type="disc">
                <li className="MsoNormal" style={{marginBottom: '0cm', textAlign: 'justify', msoList: 'l15 level1 lfo11'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Worked on
                    the company’s product <i>Flamingo</i> – Any database to any database
                    object migration tool. This tool migrates database objects like tables
                    and views, constraints like primary keys, foreign keys and unique keys<o:p /></span></li>
              </ul>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 55}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{msoBidiFontSize: '10.0pt', fontFamily: '"Cambria",serif'}}><o:p>&nbsp;</o:p></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <ul style={{marginTop: '0cm'}} type="disc">
                <li className="MsoNormal" style={{marginBottom: '0cm', textAlign: 'justify', msoList: 'l12 level1 lfo12'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Worked for
                    a client, <b>LOYAL3, USA</b> to develop HTML Scrapper to extract
                    information from brokerage accounts. The scrapper can authenticate
                    itself on multiple brokerage sites and displays the aggregated
                    information<o:p /></span></li>
              </ul>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 56}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{msoBidiFontSize: '10.0pt', fontFamily: '"Cambria",serif'}}><o:p>&nbsp;</o:p></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <ul style={{marginTop: '0cm'}} type="disc">
                <li className="MsoNormal" style={{marginBottom: '0cm', textAlign: 'justify', msoList: 'l12 level1 lfo12'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Worked
                    with <span className="SpellE"><b>Datagenuis</b></span><b>, USA</b>. The main
                    tasks were to clean up the database and tune the existing data
                    extraction queries. Performed DBA activities like database creation,
                    schema creation, backups<o:p /></span></li>
              </ul>
              <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '0cm', marginLeft: '18.0pt', textAlign: 'justify'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}><o:p>&nbsp;</o:p></span></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 57}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Technology/IDE Used</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '0cm', marginLeft: '11.7pt'}}><b><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Core Java,
                    Swing Framework, JSP’s, Spring Framework, Spring Security, AJAX, Oracle
                    Analytics, NetBeans</span></b><b><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></b></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 58}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontSize: '10.0pt', fontFamily: '"Cambria",serif'}}><o:p>&nbsp;</o:p></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontSize: '10.0pt', fontFamily: '"Cambria",serif'}}><o:p>&nbsp;</o:p></span></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 59}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Name of employer</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '0cm', marginLeft: '11.7pt'}}><b><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Cognizant
                    Technology Solutions Pvt. Ltd.</span></b><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>,
                  Pune, India</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 60}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Clients</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '0cm', marginLeft: '11.7pt'}}><b><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Wellington
                    Management Company LLP.</span></b><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>, Boston, USA</span><b><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></b></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 61}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Position held</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '0cm', marginLeft: '11.7pt'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Programmer
                  Analyst Trainee</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 62}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Duration</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '0cm', marginLeft: '36.0pt', textIndent: '-24.3pt'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>August
                  2007 – September 2008</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 63}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Main activities </span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <ul style={{marginTop: '0cm'}} type="disc">
                <li className="MsoNormal" style={{marginBottom: '0cm', textAlign: 'justify', msoList: 'l15 level1 lfo11'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Trained in
                    Core Java, Java – Web<o:p /></span></li>
              </ul>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 64}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{msoBidiFontSize: '10.0pt', fontFamily: '"Cambria",serif'}}><o:p>&nbsp;</o:p></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <ul style={{marginTop: '0cm'}} type="disc">
                <li className="MsoNormal" style={{marginBottom: '0cm', textAlign: 'justify', msoList: 'l12 level1 lfo12'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Worked
                    with Wellington Management Company, Boston, USA. The company serves as
                    investment adviser or sub-adviser for client portfolios<o:p /></span></li>
              </ul>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 65}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{msoBidiFontSize: '10.0pt', fontFamily: '"Cambria",serif'}}><o:p>&nbsp;</o:p></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <ul style={{marginTop: '0cm'}} type="disc">
                <li className="MsoNormal" style={{marginBottom: '0cm', textAlign: 'justify', msoList: 'l12 level1 lfo12'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Managed
                    their two applications <span className="SpellE">Statserver</span> and
                    Datamart.<o:p /></span></li>
              </ul>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 66}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{msoBidiFontSize: '10.0pt', fontFamily: '"Cambria",serif'}}><o:p>&nbsp;</o:p></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <ul style={{marginTop: '0cm'}} type="disc">
                <li className="MsoNormal" style={{marginBottom: '0cm', textAlign: 'justify', msoList: 'l12 level1 lfo12'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Was a
                    member of support team<o:p /></span></li>
              </ul>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 67}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Technology/IDE Used</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '0cm', marginLeft: '11.7pt'}}><b><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Core Java, Java
                    Web, Oracle SQL – PL/SQL</span></b><b><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></b></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 68}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontSize: '10.0pt', fontFamily: '"Cambria",serif'}}><o:p>&nbsp;</o:p></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '0cm', marginLeft: '12.6pt', lineHeight: 'normal'}}><span lang="EN-US" style={{fontSize: '10.0pt', fontFamily: '"Cambria",serif'}}><o:p>&nbsp;</o:p></span></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 69}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Name of Institution</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '0cm', marginLeft: '11.7pt'}}><b><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>College of
                    Military Engineering</span></b><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>, <span className="SpellE">Kirki</span>, India</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 70}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Position held</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '0cm', marginLeft: '11.7pt'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Under
                  graduation Intern </span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 71}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Duration</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '0cm', marginLeft: '36.0pt', textIndent: '-24.3pt'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>July
                  2006 – June 2007</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 72}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Honors and Awards</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '0cm', marginLeft: '11.7pt'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Won 3rd prize
                  in “Inventions Unlimited” project exhibition organized by Bharati Vidyapith
                  COE<o:p /></span></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 73}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Main activities </span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <ul style={{marginTop: '0cm'}} type="disc">
                <li className="MsoNormal" style={{marginBottom: '0cm', textAlign: 'justify', msoList: 'l15 level1 lfo11'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Worked on
                    a research project “<i>Pattern Recognition Algorithm Development for
                      Digital Images Using Automated Techniques</i>”. The project dealt with
                    classification of Satellite images into different user defined feature classes.
                    The project tried to overcome the drawbacks of the classical
                    classification techniques by using extra classification attributes<o:p /></span></li>
              </ul>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 74}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Technology/IDE Used</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '0cm', marginLeft: '11.7pt'}}><b><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Microsoft
                    Visual C#, Microsoft Access, Visual Studio</span></b><b><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></b></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 75}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontSize: '10.0pt', fontFamily: '"Cambria",serif'}}><o:p>&nbsp;</o:p></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontSize: '10.0pt', fontFamily: '"Cambria",serif'}}><o:p>&nbsp;</o:p></span></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 76}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{msoBidiFontSize: '10.0pt', fontFamily: '"Cambria",serif'}}><o:p>&nbsp;</o:p></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '0cm', marginLeft: '12.6pt', lineHeight: 'normal'}}><b><span lang="EN-US" style={{fontSize: '14.0pt', fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria', color: '#A6A6A6', msoThemecolor: 'background1', msoThemeshade: 166}}>Projects @ University of Applied Sciences, Hof</span></b><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 77}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontSize: '10.0pt', fontFamily: '"Cambria",serif'}}><o:p>&nbsp;</o:p></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontSize: '10.0pt', fontFamily: '"Cambria",serif'}}><o:p>&nbsp;</o:p></span></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 78}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Project Title</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '0cm', marginLeft: '11.7pt', textAlign: 'justify'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Simulation
                  Application in Control of Distributed Manufacturing Environment</span><b><span lang="EN-US" style={{fontSize: '14.0pt', lineHeight: '115%', fontFamily: '"Cambria",serif', color: '#A6A6A6', msoThemecolor: 'background1', msoThemeshade: 166}}><o:p /></span></b></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 79}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Duration</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '0cm', marginLeft: '36.0pt', textIndent: '-24.3pt', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>September 2010 – January 2011</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 80}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Description</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '0cm', marginLeft: '12.6pt', textAlign: 'justify', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Developed a module to simulate the creation of
                  specific pattern using a robotic arm</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 81}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Technology/IDE Used</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '0cm', marginLeft: '12.6pt', lineHeight: 'normal'}}><b><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Core
                    Java, J2SE, Socket Programming, <span className="SpellE">Netbeans</span></span></b><b><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></b></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 82}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{msoBidiFontSize: '10.0pt', fontFamily: '"Cambria",serif'}}><o:p>&nbsp;</o:p></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{msoBidiFontSize: '10.0pt', fontFamily: '"Cambria",serif'}}><o:p>&nbsp;</o:p></span></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 83}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Project Title</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '0cm', marginLeft: '11.7pt'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Datebook -
                  Personal organizer</span><b><span lang="EN-US" style={{fontSize: '14.0pt', lineHeight: '115%', fontFamily: '"Cambria",serif', color: '#A6A6A6', msoThemecolor: 'background1', msoThemeshade: 166}}><o:p /></span></b></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 84}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Duration</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '0cm', marginLeft: '36.0pt', textIndent: '-24.3pt', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>March 2010 – July 2010</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 85}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Description</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '0cm', marginLeft: '12.6pt', textAlign: 'justify', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Developed an application to simplify the task
                  of management of events, reminders, anniversaries and meetings. The events
                  can be viewed in various formats like daily, weekly and monthly view</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 86}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Technology/IDE Used</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '0cm', marginLeft: '12.6pt', lineHeight: 'normal'}}><b><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>JSF,
                    Spring Framework, Hibernate – JPA, <span className="SpellE">Netbeans</span></span></b><b><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></b></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 87}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{msoBidiFontSize: '10.0pt', fontFamily: '"Cambria",serif'}}><o:p>&nbsp;</o:p></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{msoBidiFontSize: '10.0pt', fontFamily: '"Cambria",serif'}}><o:p>&nbsp;</o:p></span></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 88}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><span lang="EN-US" style={{fontSize: '10.0pt', fontFamily: '"Cambria",serif'}}><o:p>&nbsp;</o:p></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '0cm', marginLeft: '12.6pt', lineHeight: 'normal'}}><b><span lang="EN-US" style={{fontSize: '14.0pt', fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria', color: '#A6A6A6', msoThemecolor: 'background1', msoThemeshade: 166}}>Education and Qualification</span></b><span lang="EN-US" style={{fontSize: '10.0pt', fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 89}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontSize: '10.0pt', fontFamily: '"Cambria",serif'}}><o:p>&nbsp;</o:p></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontSize: '10.0pt', fontFamily: '"Cambria",serif'}}><o:p>&nbsp;</o:p></span></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 90}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}><span style={{msoSpacerun: 'yes'}}>&nbsp; </span>Title
                  of qualification awarded</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '0cm', marginLeft: '12.6pt'}}><b><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Masters in
                    Software Engineering for Industrial Application</span></b><b><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></b></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 91}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Duration</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '0cm', marginLeft: '12.6pt'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>February 2010 –
                  March 2012 (2 Years)</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 92}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Final Score</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '0cm', marginLeft: '12.6pt'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>1,4 (1,0 –
                  Best)</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 93}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>University</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '0cm', marginLeft: '12.6pt'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>University of
                  Applied Sciences, Hof (Hochschule Hof)</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 94}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{msoBidiFontSize: '10.0pt', fontFamily: '"Cambria",serif'}}><o:p>&nbsp;</o:p></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '0cm', marginLeft: '12.6pt', lineHeight: 'normal'}}><span lang="EN-US" style={{msoBidiFontSize: '10.0pt', fontFamily: '"Cambria",serif'}}><o:p>&nbsp;</o:p></span></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 95}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}><span style={{msoSpacerun: 'yes'}}>&nbsp; </span>Title
                  of qualification awarded</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '0cm', marginLeft: '12.6pt'}}><b><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Bachelor of
                    Engineering – Computer</span></b><b><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></b></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 96}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Duration</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '0cm', marginLeft: '12.6pt'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>2003 – 2007 (4
                  Years)</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 97}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Final Score</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '0cm', marginLeft: '12.6pt'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>78.73% (100% –
                  Best)</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 98}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Honors and Awards</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '0cm', marginLeft: '12.6pt'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>4<sup>th</sup>
                  Rank out of 2269 Students</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 99}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>University</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '0cm', marginLeft: '12.6pt'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Pune University</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 100}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontSize: '10.0pt', fontFamily: '"Cambria",serif'}}><o:p>&nbsp;</o:p></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" style={{marginBottom: '0cm', lineHeight: 'normal'}}><span lang="EN-US" style={{fontSize: '10.0pt', fontFamily: '"Cambria",serif'}}><o:p>&nbsp;</o:p></span></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 101}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{msoBidiFontSize: '10.0pt', fontFamily: '"Cambria",serif'}}><o:p>&nbsp;</o:p></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '0cm', marginLeft: '12.6pt'}}><b><span lang="EN-US" style={{fontSize: '14.0pt', lineHeight: '115%', fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria', color: '#A6A6A6', msoThemecolor: 'background1', msoThemeshade: 166}}>Personal
                    skills and Competences</span></b><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 102}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontSize: '10.0pt', fontFamily: '"Cambria",serif'}}><o:p>&nbsp;</o:p></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontSize: '10.0pt', fontFamily: '"Cambria",serif'}}><o:p>&nbsp;</o:p></span></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 103}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Languages</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '0cm', marginLeft: '12.6pt'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>English
                  (Fluent), Marathi (Native), German (Basic), Hindi (Sound Knowledge), Japanese
                  (Basic) </span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 104}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Certifications</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoListParagraph" style={{textIndent: '-18.0pt', msoList: 'l15 level1 lfo11'}}>{/*[if !supportLists]*/}<span lang="EN-US" style={{fontFamily: 'Symbol', msoFareastFontFamily: 'Symbol', msoBidiFontFamily: 'Symbol'}}><span style={{msoList: 'Ignore'}}>·<span style={{font: '7.0pt "Times New Roman"'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span>{/*[endif]*/}<span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>TELC – B1 German Language Certification</span></p>
              <ul style={{marginTop: '0cm'}} type="disc">
                <li className="MsoNormal" style={{marginBottom: '0cm', msoList: 'l15 level1 lfo11'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Sun Certified Java Programmer
                    (SCJP) – Java 5 – 84%<o:p /></span></li>
              </ul>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 105}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{msoBidiFontSize: '10.0pt', fontFamily: '"Cambria",serif'}}><o:p>&nbsp;</o:p></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <ul style={{marginTop: '0cm'}} type="disc">
                <li className="MsoNormal" style={{marginBottom: '0cm', msoList: 'l15 level1 lfo11'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Cognizant Certified Professional –
                    (CCP) – Core Java<o:p /></span></li>
              </ul>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 106}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{msoBidiFontSize: '10.0pt', fontFamily: '"Cambria",serif'}}><o:p>&nbsp;</o:p></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <ul style={{marginTop: '0cm'}} type="disc">
                <li className="MsoNormal" style={{marginBottom: '0cm', msoList: 'l15 level1 lfo11'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Cognizant Certified Professional –
                    (CCP) – Oracle – SQL/PLSQL<o:p /></span></li>
              </ul>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 107}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{msoBidiFontSize: '10.0pt', fontFamily: '"Cambria",serif'}}><o:p>&nbsp;</o:p></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <ul style={{marginTop: '0cm'}} type="disc">
                <li className="MsoNormal" style={{marginBottom: '0cm', msoList: 'l15 level1 lfo11'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Cognizant Certified Professional –
                    (CCP) – Visual C#<o:p /></span></li>
              </ul>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 108}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{msoBidiFontSize: '10.0pt', fontFamily: '"Cambria",serif'}}><o:p>&nbsp;</o:p></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <ul style={{marginTop: '0cm'}} type="disc">
                <li className="MsoNormal" style={{marginBottom: '0cm', msoList: 'l15 level1 lfo11'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Cognizant Certified Professional –
                    (CCP) – Investment Management (L1)<o:p /></span></li>
              </ul>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 109}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{msoBidiFontSize: '10.0pt', fontFamily: '"Cambria",serif'}}><o:p>&nbsp;</o:p></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <ul style={{marginTop: '0cm'}} type="disc">
                <li className="MsoNormal" style={{marginBottom: '0cm', msoList: 'l15 level1 lfo11'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Cognizant Certified Professional –
                    (CCP) – Banking and Financial Services (L0)<o:p /></span></li>
              </ul>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 110}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Courses &amp; Trainings</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <ul style={{marginTop: '0cm'}} type="disc">
                <li className="MsoNormal" style={{marginBottom: '0cm', msoList: 'l15 level1 lfo11'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Attended the course on SAP R/3
                    Enterprise - PS Project System in University of Applied Science, Hof.<o:p /></span></li>
              </ul>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 111}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{msoBidiFontSize: '10.0pt', fontFamily: '"Cambria",serif'}}><o:p>&nbsp;</o:p></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <ul style={{marginTop: '0cm'}} type="disc">
                <li className="MsoNormal" style={{marginBottom: '0cm', msoList: 'l15 level1 lfo11'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>40 hours of training for Oracle –
                    DBA Fundamentals – I<o:p /></span></li>
              </ul>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 112}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{msoBidiFontSize: '10.0pt', fontFamily: '"Cambria",serif'}}><o:p>&nbsp;</o:p></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <ul style={{marginTop: '0cm'}} type="disc">
                <li className="MsoNormal" style={{marginBottom: '0cm', msoList: 'l15 level1 lfo11'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Japanese Language Proficiency Test
                    – 4th Level<o:p /></span></li>
              </ul>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 113}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span lang="EN-US" style={{fontSize: '10.0pt', fontFamily: '"Cambria",serif'}}><o:p>&nbsp;</o:p></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '0cm', marginLeft: '12.6pt', lineHeight: 'normal'}}><span lang="EN-US" style={{fontSize: '10.0pt', fontFamily: '"Cambria",serif'}}><o:p>&nbsp;</o:p></span></p>
            </td>
          </tr>
          <tr style={{msoYftiIrow: 114, msoYftiLastrow: 'yes'}}>
            <td width={247} valign="top" style={{width: '185.4pt', border: 'none', borderRight: 'solid windowtext 1.0pt', msoBorderRightAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" align="right" style={{marginTop: '0cm', marginRight: '8.1pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'right', lineHeight: 'normal'}}><b><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria', color: 'black', msoThemecolor: 'text1'}}>References</span></b><span lang="EN-US" style={{fontFamily: '"Cambria",serif', color: 'black', msoThemecolor: 'text1'}}><o:p /></span></p>
            </td>
            <td width={449} valign="top" style={{width: '336.6pt', border: 'none', msoBorderLeftAlt: 'solid windowtext .5pt', padding: '0cm 5.4pt 0cm 5.4pt'}}>
              <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '0cm', marginLeft: '12.6pt'}}><span lang="EN-US" style={{fontFamily: '"Cambria",serif', msoFareastFontFamily: 'Cambria', msoBidiFontFamily: 'Cambria'}}>Available on
                  request</span><span lang="EN-US" style={{fontFamily: '"Cambria",serif'}}><o:p /></span></p>
            </td>
          </tr>
        </tbody></table>
      <p className="MsoNormal" style={{marginBottom: '0cm', lineHeight: 'normal'}}><span lang="EN-US"><o:p>&nbsp;</o:p></span></p>
    </div>
  );
};

export default NotFound;
