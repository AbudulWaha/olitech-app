import React from 'react'
import html from './htmlblog.png'
import result from './htmlresult.png'
import htmlstructure from './html-structure.png'
import headresult from './headresult.png'
import paragraph from './paragraphtag.png'
import pararesult from './paragraphresult.png'
import brek from './break.png'
import brekresult from './breakresult.png'
import center from './center.png'
import centeresult from './centerresult.png'
import nested from './nestedElement.png'
import nestedresult from './htmlresult.png'
import attr from './attribute.png'
import attresult from './attributeresult.png'

const HtmlBlog = () => {
  return (
    <div className='py-3 mx-2 dark:text-white font-sans'>
      <h1 className='text-4xl py-2 font-bold font-sans'> HTML </h1>
      <p>HTML stands for Hypertext Markup Language, It is widely used language to write web pages </p>
      <ul>
        <li>Hypertext refers to the way in which Web pages (HTML documents) are linked together.</li>
        <li>HTML is a Markup Language which means you use HTML to simply "mark-up" a text document with tags that tell a Web browser how to structure it to display.</li>        
      </ul>
      <p>HTML was developed with the intent of defining the structure of documents like headings, paragraphs, lists, and so forth to facilitate the sharing of scientific information between researchers.</p>
      <div className='flex flex-wrap justify-between'>
        <div className='border shadow max-w-3xl p-2 overflow-hidden mb-2'>
          <span>Basic HTML Document</span>
          <p>In its simplest form, following is an example of an HTML document:</p>
          <img className='max-w-2xl' src={html} alt='htmll' />
        </div>
        <div className='border  shadow max-w-2xl p-1 overflow-hidden'>
          <h3 className='text-xl py-2'>Web Result</h3>
          <img className='max-w-2xl' src={result} alt='result' />
        </div>
      </div>
      <h2 className='text-xl pb-2 font-semibold'>HTML TAGS</h2>
      <p>
      As told earlier, HTML is a markup language and makes use of various tags to format the
      content. These tags are enclosed within angle braces {`<Tag Name>. Except few tags, most
      of the tags have their corresponding closing tags. For example, <html> has its closing
      tag</html> and <body> tag has its closing tag </body> tag etc.`}
      </p>
      <p>Above example of HTML document uses the following tags:</p>
      <table className='border border-slate-300 text-lg'>
        <thead className='border'>
          <td className='border '>Tag</td>
          <td className='border'>Description </td>
        </thead>
        <tbody className='border'>
          <tr className='border'>
            <td className='border pr-5'>{'<!DOCTYPE...>'}</td>
            <td className='border'>This tag defines the document type and HTML version</td>
          </tr>
          <tr>
            <td className='border'>{'<html>'}</td>
            <td className='border'>{`This tag encloses the complete HTML document and mainly comprises
              of document header which is represented by <head>...</head> and
              document body which is represented by <body>...</body> tags.`}</td>
          </tr>
          <tr>
            <td className='border'>{"<head>"}</td>
            <td className='border'>{`This tag represents the document's header which can keep other HTML
            tags like <title>, <link> etc.`}</td>
          </tr>
          <tr>
            <td className='border'>{"<title>"}</td>
            <td className='border'>{`The <title> tag is used inside the <head> tag to mention the
              document title.`}</td>
          </tr>
          <tr>
            <td className='border'>{"<body> "}</td>
            <td className='border'>{`This tag represents the document's body which keeps other HTML tags
              like <h1>, <div>, <p> etc`}</td>
          </tr>
          <tr>
            <td className='border'>{"<h1>  "}</td>
            <td className='border'>{`This tag represents the heading.`}</td>
          </tr>
          <tr>
            <td className='border'>{"<p> "}</td>
            <td className='border'>{`This tag represents a paragraph.`}</td>
          </tr>
        </tbody>
        
      </table>
      <p>To learn HTML, you will need to study various tags and understand how they behave, while
        formatting a textual document. Learning HTML is simple as users have to learn the usage of
        different tags in order to format the text or images to make a beautiful webpage.
      </p>
      <h2>HTML Document Structure</h2>
      <p>A typical HTML document will have the following structure :</p>
      <div>
        <p>Document decleration tag</p>
        <div>
          <img src={htmlstructure} alt='' />
          <p>We will study all the header and body tags in subsequent chapters, but for now let's see what
            is document declaration tag.</p>
        </div>
      </div>
      <div>
        <h2>{"The <!DOCTYPE> Declaration"}</h2>
        <p>{`The <!DOCTYPE> declaration tag is used by the web browser to understand the version of
              the HTML used in the document. Current version of HTML is 5 and it makes use of the following
              declaration:`}
        </p>
        <span>{"<!DOCTYPE html>"}</span>
        <p>
          {`There are many other declaration types which can be used in HTML document depending on
            what version of HTML is being used. We will see more details on this while discussing
            <!DOCTYPE...> tag along with other HTML tags.`}
        </p>
      </div>
      <div>
        <h2>Heading Tags</h2>
        <p>
          {`Any document starts with a heading. You can use different sizes for your headings. HTML also
            has six levels of headings, which use the elements <h1>, <h2>, <h3>, <h4>, <h5>, and
            <h6>. While displaying any heading, browser adds one line before and one line after that
            heading.`}
        </p>
        <h3>Example</h3>
        <span>
          <p>{`<!DOCTYPE html>`}</p>
          <p>{`<html>`}</p>
          <p>{`<head>`}</p>
          <p>{`<title>Heading Example</title>`}</p>
          <p>{`</head>`}</p>
          <p>{`<body>`}</p>
          <p>{`<h1>This is heading 1</h1>`}</p>
          <p>{`<h2>This is heading 2</h2>`}</p>
          <p>{`<h3>This is heading 3</h3>`}</p>
          <p>{`<h4>This is heading 4</h4>`}</p>
          <p>{`<h5>This is heading 5</h5>`}</p>
          <p>{`<h6>This is heading 6</h6>`}</p>
          <p>{`</body>`}</p>
          <p>{`</html>`}</p>
        </span>
        <p>This will produce the following result </p>

        <span>
          <img src={headresult} alt='' />
        </span>
      </div>
      <div>
        <h2><b>Paragraph Tag </b></h2>
        <p>{`
        The <p> tag offers a way to structure your text into different paragraphs. Each paragraph of
        text should go in between an opening <p> and a closing </p> tag as shown below in the
        example:
        `}</p>
        <p>Example</p>
        <span>
          <img src={paragraph} about='' />
        </span>
        <p>This will produce the following result</p>
        <span>
          <img src={pararesult} alt='' />
        </span>
      </div>
      <div>
        <h2><b>Line Break Tag</b></h2>
        <p>{`Whenever you use the <br /> element, anything following it starts from the next line. This
            tag is an example of an empty element, where you do not need opening and closing tags, as
            there is nothing to go in between them.
            `}</p>
        <p>
          {`
          The <br /> tag has a space between the characters br and the forward slash. If you omit this
          space, older browsers will have trouble rendering the line break, while if you miss the forward
          slash character and just use <br> it is not valid in XHTML.
          
          `}
        </p>
        <p>Example</p>
        <span>
          <img src={brek} alt='' />
        </span>
        <p>This will produce the following result</p>
        <span>
          <img src={brekresult} alt='' />
        </span>
      </div>
      <div>
        <h2><b> Centering Content</b></h2>
        <p>{"You can use <center> tag to put any content in the center of the page or any table cell."}</p>
        <p>Examole</p>
        <span>
          <img src={center} alt='' />
        </span>
        <p>This will produce the following result:</p>
        <span>
          <img src={centeresult} alt='' />
        </span>
      </div>
      <div>
        <h2>Html Element</h2>
        <p>An HTML element is defined by a starting tag. If the element contains other content, it ends
          with a closing tag, where the element name is preceded by a forward slash as shown below
          with few tags
        </p>
        <table>
          <thead>
            <th>Start Tag</th>
            <th>Content</th>
            <th>End Tag</th>
          </thead>
          <tbody>
            <tr>
              <td>{"<p>"}</td>
              <td>This is paragraph content </td>
              <td>{"</p>"}</td> 
            </tr>
            <tr>
              <td>{"<h1>"}</td>
              <td>This is heading content </td>
              <td>{"</h1>"}</td> 
            </tr>
            <tr>
              <td>{"<div>"}</td>
              <td>This is division content </td>
              <td>{"</div>"}</td> 
            </tr>
            
          </tbody>
        </table>
        <p>
          {`
          So here <p>....</p> is an HTML element, <h1>...</h1> is another HTML element. There
          are some HTML elements which don't need to be closed, such as <img.../>, <hr /> and
          <br /> elements. These are known as void elements.          
          `}
        </p> <br />
        <p>
          {`
          HTML documents consists of a tree of these elements and they specify how HTML documents
          should be built, and what kind of content should be placed in what part of an HTML document.
          `}
        </p>
      </div>
      <div>
        <h2>HTML Tag vs. Element</h2>
        <p>
          An HTML element is defined by a starting tag. If the element contains other content, it ends
          with a closing tag.
        </p>
        <p>
          {`
          For example, <p> is starting tag of a paragraph and </p> is closing tag of the same
          paragraph but <p>This is paragraph</p> is a paragraph element.          
          `}
        </p>
      </div>
      <div>
        <h2>Nested HTML Elements</h2>
        <p>It is very much allowed to keep one HTML element inside another HTML element</p>
        <p>Example</p>
        <span>
          <img src={nested} alt='' />
        </span>
        <p>This will produce the following </p>
        <span>
          <img src={nestedresult} alt='' />
        </span>
      </div>
      <div>
        <h>HTML Attribute</h>
        <p>
          {`
          We have seen few HTML tags and their usage like heading tags <h1>, <h2>, paragraph tag
          <p> and other tags. We used them so far in their simplest form, but most of the HTML tags
          can also have attributes, which are extra bits of information.
          
          `}
        </p>
        <p>
          {`
          An attribute is used to define the characteristics of an HTML element and is placed inside the
          element's opening tag. All attributes are made up of two parts: a name and a value:
          `}
        </p>
        <ol>
          <li>
            {`
            The name is the property you want to set. For example, the paragraph <p> element
            in the example carries an attribute whose name is style, which you can use to indicate
            the type of style you want for the paragraph on the page.
            `}
          </li>
          <li>
            The value is what you want the value of the property to be set and always put within
            quotations. The below example shows three possible values of style attribute: text-align which can be set to center, left, right 
          </li>
        </ol>
        <p>
          Attribute names and attribute values are case-insensitive. However, the World Wide Web
          Consortium (W3C) recommends lowercase attributes/attribute values in their HTML 5
          recommendation.
        </p>
        <h4>Example</h4>
        <div>
          <img src={attr} alt='' />
        </div>
        <p>This will display the following  result</p>
        <div>
          <img src={attresult} alt='' />
        </div>
      </div>
      <div>
        <h2>Core Attribute</h2>
        <p>The four core attributes that can be used on the majority of HTML elements (although not all)
        are:</p>
        <ul>
          <li>Id</li>
          <li>Title</li>
          <li>class</li>
          <li>style</li>
        </ul>
        <h2>The Id Attribute</h2>
        <p>
        The id attribute of an HTML tag can be used to uniquely identify any element within an HTML
        page. There are two primary reasons that you might want to use an id attribute on an
        element:
        </p>
        <ul>
          <li>
            If an element carries an id attribute as a unique identifier, it is possible to identify just
            that element and its content.
          </li>
          <li>
            If you have two elements of the same name within a Web page (or style sheet), you
            can use the id attribute to distinguish between elements that have the same name.
          </li>
        </ul>
       <h2>The Class Attribute</h2>
       <p>
       The class attribute is used to associate an element with a style sheet, and specifies the class
      of element. You will learn more about the use of the class attribute when you will learn
      Cascading Style Sheet (CSS). So for now you can avoid it.
       </p>
      </div>
    </div>
  )
}

export default HtmlBlog
