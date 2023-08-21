import React from 'react'
import css_syntax from './css-sytax.png'
import inlineCss from './inline_css.png'
import inlineresult from './inline_css_result.png'
import internalcss from './internalcss.png'
import externalcss from './externalcss.png'
import element from './elementselector.png'
import elementresult from './elementresult.png'
import id from './id.png'
import idresult from './idresult.png'
import gclass from './class.png'
import color from './colortest.png'
import colorresult from './colorresult.png'
import bordercolor from './bodercolor.png'
import bodercolorresult from './bodercolorresult.png'
import border from './bordered.png'
import margin from './margin.png'
import padding from './padding.png'

const CssBlog = () => {
  return (
    <div className='mx-3 font-sans font-normal'>
      <div className='py-4 font-sans '>
        <h4 className='font-medium'>
          CSS (Cascading Style Sheets) is an essential tool for web developers. It allows you to control the visual presentation of your web pages, including layout, colors, fonts, and more. With CSS, you can make your website look professional and visually appealing, which is essential for attracting and retaining visitors.
        </h4>
        <h2 className='py-2 font-bold text-3xl'>Why Learn Css ?</h2>
        <p>There are several reasons why you should learn CSS:</p>
        <br />
        <ul className='ml-4'>
          <li>
            <h3>Control the presentation of your website:</h3>
            <p>
              With CSS, you can control the visual appearance of your website. You can change the layout, colors, fonts, and more to create a unique and professional-looking website.
            </p>
          </li>
          <br />
          <li>
            <h3>Increase your employability:</h3>
            <p>CSS is a valuable skill that many employers look for when hiring web developers. By learning CSS, you can increase your chances of finding a job in the field.</p>
          </li>
          <br />
          <li>
            <h3>Save time and effort:</h3>
            <p>By separating the content of your web pages from their presentation, you can save time and effort when making changes to your website.</p>
          </li>
        </ul>
      </div>
      <div>
        <h2 className='py-2 font-bold text-3xl'>What is CSS ?</h2>
        <ul className='ml-4'>
          <li>CSS stands for Cascading Style Sheets</li>
          <li>CSS describes how HTML elements are to be displayed on screen, paper, or in other media</li>
          <li>CSS saves a lot of work. It can control the layout of multiple web pages all at once</li>
          <li>External stylesheets are stored in CSS files</li>
        </ul>
        <h2 className='py-2 font-bold text-3xl '>Why Use CSS ?</h2>
        <p className='pl-3'>CSS is used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes. </p>
        <p className='pl-3'>CSS solved a big problem,HTML was NEVER intended to contain tags for formatting a web page!, HTML was created to describe the content of a web page, like: </p>
        <span className='pl-3'>
          {`
          <h1>This is a heading</h1>, <p>This is a paragraph.</p>
          `}
        </span>
        <p className='pl-3'>when tag like "font" with a property "color" , it started a nightmare for web developers. Development of large websites, where font and color information were added to every single page, became a long and expensive process.</p>
        <p className='pl-3'>To solve this problem, the World Wide Web Consortium (W3C) created CSS.</p>
        <h2 className='py-2 font-bold text-3xl'>CSS Syntax</h2>
        <p>A CSS rule-set consists of a selector and a declaration block:</p>
        <p>with a selector of "h1" </p>
        <p>{"whith a Declaration of {} and a property of color: with a value of any color for Example blue "}</p>
        <br />
        <ul className='ml-4'>
          <li>The selector points to the HTML element you want to style.</li>
          <li>The declaration block contains one or more declarations separated by semicolons.</li>
          <li>Each declaration includes a CSS property name and a value, separated by a colon.</li>
          <li>A CSS declaration always ends with a semicolon, and declaration blocks are surrounded by curly braces. </li>
        </ul><br />
        <p>Example</p>
        <span>
          <img src={css_syntax} alt='css_syntax' />
        </span>
      </div>
      <div>
        <h2 className='py-2 font-bold text-3xl'>How To Use Css</h2>
        <p>Css can be use in three major ways which are :</p>
        <ul className='font-medium text-xl ml-4'>
          <li>Inline Css</li>
          <li>Internal Css</li>
          <li>External Css</li>
        </ul>
        <h2 className='py-2 font-bold text-2xl'>Inline Css</h2>
        <p>Inline Css are use in form of attribute by using the attribute "style" with any property of styles like "color" and with a value of color like red.</p>
        <br />
        <p className='text-xl'>For Example</p>
        <span>
          <img src={inlineCss} alt='' />
        </span>
        <br />
        <p className='text-xl'>Result</p>
        <span>
          <img src={inlineresult} alt='' />
        </span>
      </div>
      <div>
        <h2 className='py-2 font-bold text-2xl'>Internal Css</h2>
        <p>Internal Css are use in form of html tag by using {"<style></style>"} in between the tags by using the selector with the property and a values</p>
        <br />
        <p className='text-xl'>For Example</p>
        <span>
          <img src={internalcss} alt='inlineCss' />
        </span>
        <br />
        <p className='text-xl'>Result</p>
        <span>
          <img src={inlineresult} alt='inlineresult' />
        </span>
      </div>
      <div>
        <h2 className='py-2 font-bold text-2xl'>External Css</h2>
        <p>External Css are used by creating an external file inside the same folder as the html file. It must be link with the html file by using link tag {`<link rel="stylesheet" href="nameofcssfile.css" >`}</p>
        <br />
        <p className='text-xl'>For Example</p>
        <span>
          <img src={externalcss} alt='inlineCss' />
        </span>
        <br />
        <p className='text-xl'>Result</p>
        <span>
          <img src={inlineresult} alt='inlineresult' />
        </span>
        <h2 className='py-2 font-bold text-2xl'>Selectors</h2>
        <p>Selectors are use to selector HTML tags or Element. Selectors are use in external and internal css, they cannot be use in inline css. there are different ways we can make use of our selector. There are two common ways at which we can use selector</p>
        <h3 className='text-xl font-medium py-3'>The CSS Element selector</h3>
        <p>The element selector selects HTML elements based on the element name.</p>
        <span>
          <img src={element} alt='inlineCss' />
        </span>
        <br />
        <p className='text-xl'>Result</p>
        <span className='border '>
          <img src={elementresult} alt='inlineresult' />
          <p>where the p tag is an example the element selector</p>
        </span>
        <h3 className='py-2 font-bold text-2xl'>The CSS id Selector</h3>
        <p>The id selector uses the id attribute of an HTML element to select a specific element.The id of an element is unique within a page, so the id selector is used to select one unique element!. To select an element with a specific id, write a hash (#) character, followed by the id of the element.</p>
        <p><span className='font-bold'>Note: </span> An id name cannot start with a number!</p>
        <span>
          <img src={id} alt='inlineCss' />
        </span>
        <br />
        <p className='text-xl'>Result</p>
        <span className='border '>
          <img src={idresult} alt='inlineresult' />
          <p>where the "#para" is the value of id an example the id selector</p>
        </span>
        <h3 className='py-2 font-bold text-2xl'>The CSS Class Selector</h3>
        <p>The class selector uses the class attribute of an HTML element to select a specific element.The class of an element is unique within a page, so the class selector is used to select one unique element!. To select an element with a specific id, write a hash (.) character, followed by the class of the element.</p>
        <p><span className='font-bold'>Note: </span> An id name cannot start with a number!</p>
        <span>
          <img src={gclass} alt='inlineCss' />
        </span>
        <br />
        <p className='text-xl'>Result</p>
        <span className='border '>
          <img src={idresult} alt='inlineresult' />
          <p>where the ".para" is the value of class an example class selector</p>
        </span>
      </div>
      <div>
        <h2>Colors in CSS</h2>
        <p>Colors are specified using predefined color names, or RGB, HEX, HSL, RGBA, HSLA values.</p>
        <h3>Css Color Names </h3>
        <p>Example</p>
        <ul>
          <li>Blue</li>
          <li>Red</li>
          <li>Gray</li>
          <li>Violent</li>
          <li>Purple</li>
          <li>Orange</li>
          <li>Green</li>
          <li>Yellow</li>
        </ul>
        <p>We can change our text color by using CSS Text Color</p>
        <h2>CSS Text Color</h2>
        <p>Example</p>
        <span>
          <img src={color} alt='color' />
        </span>
        <p>Result</p>
        <span>
          <img src={colorresult} alt='color' />
        </span>
        <h2>CSS Border Color</h2>
        <p>You can set the color of borders:</p>
        <p>Example</p>
        <span>
          <img src={bordercolor} alt='color' />
        </span>
        <p>Result</p>
        <span>
          <img src={bodercolorresult} alt='color' />
        </span>
      </div>
      <div>
        <h2 className='font-bold text-2xl my-2'>CSS Border Properties</h2>
        <p className='text-xl'>The CSS border properties allow you to specify the style, width, and color of an element's border.</p>
        <ul>
          <li>All bordered side</li>
          <li>bottom border</li>
          <li>Rounded edges</li>
          <li>Left bordererd,etc.</li>
        </ul>
        <span>
          <img src={border} alt='border' />
        </span>
        <p>we have explain in our broad tutorial vidoes </p>
      </div>
      <div>
        <h2 className='font-bold text-2xl my-2'>CSS Margins</h2>
        <p>The CSS margin properties are used to create space around elements, outside of any defined borders. With CSS, you have full control over the margins. There are properties for setting the margin for each side of an element (top, right, bottom, and left).</p>
        
        <h2 className='font-bold text-2xl my-2'>Margin - Individual Sides</h2>
        <p>CSS has properties for specifying the margin for each side of an element:</p>
        <ul>
          <li>margin-top</li>
          <li>margin-right</li>
          <li>margin-bottom</li>
          <li>margin-left</li>
        </ul>
        <p className='font-medium text-xl py-2'>All the margin properties can have the following values:</p>
        <ul>
          <li>auto - the browser calculates the margin</li>
          <li>length - specifies a margin in px, pt, cm, etc.</li>
          <li>% - specifies a margin in % of the width of the containing element</li>
          <li>inherit - specifies that the margin should be inherited from the parent element</li>
        </ul>
        <h2>Margin - Shorthand Property</h2>
        <p>To shorten the code, it is possible to specify all the margin properties in one property.The margin property is a shorthand property for the following individual margin properties: </p>
        <ul>
          <li>margin-top</li>
          <li>margin-right</li>
          <li>margin-bottom</li>
          <li>margin-left</li>
        </ul>
        <p>So, here is how it works:</p>
        <p>If the margin property has four values:</p>
        <span>margin: 25px 50px 75px 100px;</span>
        <ul>
          <li>top margin is 25px</li>
          <li>right margin is 50px</li>
          <li>bottom margin is 75px</li>
          <li>left margin is 100px</li>
        </ul>
        <p><span className='font-bold'>Note:</span> Negative values are allowed.</p>
        <span>
          <img src={margin} alt='' />
        </span>
        <p>You can learn more about margin in the tutorial video</p>
      </div>
      <div>
        <h2>CSS Padding</h2>
        <p>The CSS padding properties are used to generate space around an element's content, inside of any defined borders. With CSS, you have full control over the padding. There are properties for setting the padding for each side of an element (top, right, bottom, and left).</p>
        <h2>Padding - Individual Sides</h2>
        <p>CSS has properties for spacifying the padding for each sie of an element </p>
        <ul>
          <li>padding-top</li>
          <li>padding-right</li>
          <li>padding-bottom</li>
          <li>padding-left</li>
        </ul>
        <p>All the padding properties can have the following values:</p>
        <ul>
          <li>length - specifies a padding in px, pt, cm, etc.</li>
          <li>% - specifies a padding in % of the width of the containing element</li>
          <li>inherit - specifies that the padding should be inherited from the parent element</li>
          <p><span className='font-medium'>Note: </span>Negative values are not allowed.</p>

        </ul>
        <h2>Padding - Shorthand Property</h2>
        <p>To shorten the code, it is possible to specify all the padding properties in one property. The padding property is a shorthand property for the following individual padding properties:</p>
        <ul>
          <li>padding-top</li>
          <li>padding-right</li>
          <li>padding-bottom</li>
          <li>padding-left</li>
        </ul>
        <p>So, here is how it work:</p>
        <p>If the padding property has four values:</p>
        <span className='font-medium'>padding: 25px 50px 75px 100px;</span>
        <ul>
          <li>top padding is 25px</li>
          <li>right padding is 50px</li>
          <li>bottom padding is 75px</li>
          <li>left padding is 100px</li>
        </ul>
        <span>
          <img src={padding} alt='' />
        </span>
        <p>You can learn more about padding in the tutorial video</p>
      </div>
    </div>
  )
}

export default CssBlog
