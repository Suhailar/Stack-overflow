import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import TagsList from './TagsList'
import './Tags.css'

    const Tags = () => {
        const tagsList = [

            {
                id: 1,
                tagName: "javascript",
                tagDesc: "For questions about programming in ECMAScript (JavaScript/JS) and its different dialects/implementations (except for ActionScript). Note that JavaScript is NOT Java. Include all tags that are relevant to your question: e.g., [node.js], [jQuery], [JSON], [ReactJS], [angular], [ember.js], [vue.js], [typescript], [svelte], etc.",
            },
            {
                id: 2,
                tagName: "python",
                tagDesc: "Python is a dynamically typed, multi-purpose programming language. It is designed to be quick to learn, understand, and use, and enforces a clean and uniform syntax. Please note that Python 2 is officially out of support as of 2020-01-01. For version-specific Python questions, add the [python-2.7] or [python-3.x] tag. When using a Python variant (e.g. Jython, PyPy) or library (e.g. Pandas, NumPy), please include it in the tags.",
            },
            {        
                id: 3,
                tagName: "java",
                tagDesc: "Java is a high-level object-oriented programming language. Use this tag when you're having problems using or understanding the language itself. This tag is frequently used alongside other tags for libraries and/or frameworks used by Java developers.",
            },
            {        
                id: 4,
                tagName: "c#",
                tagDesc: "C# (pronounced 'see sharp') is a high-level, statically typed, multi-paradigm programming language developed by Microsoft. C# code usually targets Microsoft's .NET family of tools and run-times, which include .NET, .NET Framework, .NET MAUI, and Xamarin among others. Use this tag for questions about code written in C# or about C#'s formal specification.",
            },
            {        
                id: 5,
                tagName: "php",
                tagDesc: "PHP is an open-source, multi-paradigm, dynamically-typed, and interpreted scripting language designed initially for server-side web development. Use this tag for questions about programming in the PHP language.",
            },
            {        
                id: 6,
                tagName: "android",
                tagDesc: "Android is Google's mobile operating system, used for programming or developing digital devices (Smartphones, Tablets, Automobiles, TVs, Wear, Glass, IoT). For topics related to Android, use Android-specific tags such as android-intent, android-activity, android-adapter, etc. For questions other than development or programming but related to the Android framework, use this link: https://android.stackexchange.com.",
            },
            {        
                id: 7,
                tagName: "html",
                tagDesc: "HTML (HyperText Markup Language) is the markup language for creating web pages and other information to be displayed in a web browser. Questions regarding HTML should include a minimal reproducible example and some idea of what you're trying to achieve. This tag is rarely used alone and is often paired with CSS and JavaScript.",
            },
            {        
                id: 8,
                tagName: "jquery",
                tagDesc: "jQuery is a JavaScript library. jQuery is a popular cross-browser JavaScript library that facilitates Document Object Model (DOM) traversal, event handling, animations, and AJAX interactions by minimizing the discrepancies across browsers. A question tagged jQuery should be related to jQuery, so jQuery should be used by the code in question, and at least jQuery usage-related elements must be in the question. Consider also adding the JavaScript tag.",
            },
            {        
                id: 9,
                tagName: "mysql",
                tagDesc: "MySQL is a free, open-source Relational Database Management System (RDBMS) that uses Structured Query Language (SQL). DO NOT USE this tag for other DBs such as SQL Server, SQLite etc. Those are different DBs that all use their own dialects of SQL to manage the data. Always specify the exact version of the server in the question. Versions 5.x differ greatly in their capabilities from versions 8+.",
            },
            {    
                id: 10,
                tagName: "reactjs",
                tagDesc: "React is a JavaScript library for building user interfaces. It uses a declarative, component-based paradigm and aims to be efficient and flexible."
                    
            },
            {    
                id: 11,
                tagName: "c++",
                tagDesc: "C++ is a general-purpose programming language. Use this tag for questions about/utilizing C++. Do not also tag questions with [c] unless you have a good reason. C and C++ are different languages. Use a versioned tag such as [c++11], [c++20] etc. for questions specific to a standard revision."
                    
            },
            {    
                id: 12,
                tagName: "css",
                tagDesc: "CSS (Cascading Style Sheets) is a representation style sheet language used for describing the look and formatting of HTML (HyperText Markup Language), XML (Extensible Markup Language) documents and SVG elements including (but not limited to) colors, layout, fonts, and animations. It also describes how elements should be rendered on screen, on paper, in speech, or on other media."
                    
            },
            {    
                id: 11,
                tagName: "ios",
                tagDesc: "iOS is the mobile operating system running on the Apple iPhone, iPod touch, and iPad. Use this tag [ios] for questions related to programming on the iOS platform. Use the related tags [objective-c] and [swift] for issues specific to those programming languages."
                    
            },
            {    
                id: 11,
                tagName: "sql",
                tagDesc: "Structured Query Language (SQL) is a language for querying databases. Questions should include code examples, table structure, sample data, and a tag for the DBMS implementation (e.g. MySQL, PostgreSQL, Oracle, MS SQL Server, IBM DB2, etc.) being used. If your question relates solely to a specific DBMS (uses specific extensions/features), use that DBMS's tag instead. Answers to questions tagged with SQL should use ISO/IEC standard SQL."
                    
            },
            {    
                id: 11,
                tagName: "r",
                tagDesc: "R is a free, open-source programming language & software environment for statistical computing, bioinformatics, visualization & general computing. Please use minimal reproducible examples others can run using copy & paste. Show desired output entirely. Use dput() for data & specify all non-base packages with library(). Don't embed pictures for data or code, use indented code blocks instead. For statistics questions, use https://stats.stackexchange.com."
                    
            },
            {    
                id: 11,
                tagName: "node.js",
                tagDesc: "Node.js is an event-based, non-blocking, asynchronous I/O runtime that uses Google's V8 JavaScript engine and libuv library. It is used for developing applications that make heavy use of the ability to run JavaScript both on the client as well as on the server side and therefore benefit from the re-usability of code and the lack of context switching."
                    
            },
            {    
                id: 11,
                tagName: "arrays",
                tagDesc: "An array is an ordered linear data structure consisting of a collection of elements (values, variables, or references), each identified by one or more indexes. When asking about specific variants of arrays, use these related tags instead: [vector], [arraylist], [matrix]. When using this tag, in a question that is specific to a programming language, tag the question with the programming language being used."
                    
            },
            {    
                id: 11,
                tagName: "c",
                tagDesc: "C is a general-purpose programming language used for system programming (OS and embedded), libraries, games and cross-platform. This tag should be used with general questions concerning the C language, as defined in the ISO 9899 standard (the latest version, 9899:2018, unless otherwise specified — also tag version-specific requests with c89, c99, c11, etc). C is distinct from C++ and it should not be combined with the C++ tag without a specific reason."
                    
            },
            {    
                id: 11,
                tagName: "asp.net",
                tagDesc: "ASP.NET is a Microsoft web application development framework that allows programmers to build dynamic web sites, web applications and web services. It is useful to use this tag in conjunction with the project type tag e.g. [asp.net-mvc], [asp.net-webforms], or [asp.net-web-api]. Do NOT use this tag for questions about ASP.NET Core - use [asp.net-core] instead."
                    
            },
            {    
                id: 11,
                tagName: "json",
                tagDesc: "JSON (JavaScript Object Notation) is a serializable data interchange format that is a machine and human readable. Do not use this tag for native JavaScript objects or JavaScript object literals. Before you ask a question, validate your JSON using a JSON validator such as JSONLint (https://jsonlint.com)."
                    
            },
            {    
                id: 11,
                tagName: "python-3.x",
                tagDesc: "DO NOT USE UNLESS YOUR QUESTION IS FOR PYTHON 3 ONLY. Always use alongside the standard [python] tag."
                    
            },
            {    
                id: 11,
                tagName: "ruby-on-rails",
                tagDesc: "Ruby on Rails is an open source full-stack web application framework written in Ruby. It follows the popular MVC framework model and is known for its approach to application development."
            },
            {    
                id: 11,
                tagName: ".net",
                tagDesc: "Do NOT use for questions about .NET Core - use [.net-core] instead. The .NET framework is a software framework designed mainly for the Microsoft Windows operating system. It includes an implementation of the Base Class Library, Common Language Runtime (commonly referred to as CLR), Common Type System (commonly referred to as CTS) and Dynamic Language Runtime. It supports many programming languages, including C#, VB.NET, F# and C++/CLI."
                    
            },
            {    
                id: 11,
                tagName: "sql-server",
                tagDesc: "Microsoft SQL Server is a relational database management system (RDBMS). Use this tag for all Microsoft SQL Server editions including Compact, Express, Azure, Fast-track, APS (formerly PDW) and Azure SQL DW. Do not use this tag for other types of DBMS (MySQL, PostgreSQL, Oracle, etc.). Do not use this tag for issues on software and mobile development, unless it is directly related to the database."
                    
            },
            {    
                id: 11,
                tagName: "swift",
                tagDesc: "Swift is a general-purpose programming language developed by Apple Inc first released in 2014 for its platforms and Linux. Swift is open-source. Use the tag only for questions about language features or requiring code in Swift. Use the tags [ios], [ipados], [macos], [watch-os], [tvos], [swiftui], [cocoa-touch], and [cocoa] for (language-agnostic) questions about the platforms or frameworks."
                    
            },
            {    
                id: 11,
                tagName: "django",
                tagDesc: "Django is an open-source server-side web application framework written in Python. It is designed to reduce the effort required to create complex data-driven websites and web applications, with a special focus on less code, no-redundancy and being more explicit than implicit."
                    
            },
            {    
                id: 11,
                tagName: "angular",
                tagDesc: "Questions about Angular (not to be confused with AngularJS), the web framework from Google. Use this tag for Angular questions which are not specific to an individual version. For the older AngularJS (1.x) web framework, use the AngularJS tag."
                    
            },
            {    
                id: 11,
                tagName: "objective-c",
                tagDesc: "This tag should be used only on questions that are about Objective-C features or depend on code in the language. The tags [cocoa] and [cocoa-touch] should be used to ask about Apple's frameworks or classes. Use the related tags [ios], [macos], [apple-watch] and [tvos] for issues specific to those platforms."
                    
            },
            {    
                id: 11,
                tagName: "pandas",
                tagDesc: "Pandas is a Python library for data manipulation and analysis, e.g. dataframes, multidimensional time series and cross-sectional datasets commonly found in statistics, experimental science results, econometrics, or finance. Pandas is one of the main data science libraries in Python."
                    
            },
            {    
                id: 11,
                tagName: "excel",
                tagDesc: "Only for questions on programming against Excel objects or files, or formula development. You may combine the Excel tag with VBA, VSTO, C#, VB.NET, PowerShell, OLE automation, and other programming related tags and questions if applicable. Do NOT use with other spreadsheet software like [google-sheets]."
                    
            },
            {    
                id: 11,
                tagName: "angularjs",
                tagDesc: "Use for questions about AngularJS (1.x), the open-source JavaScript framework. Do NOT use this tag for Angular 2 or later versions; instead, use the [angular] tag."
                    
            },
            {    
                id: 11,
                tagName: "regex",
                tagDesc: "Regular expressions provide a declarative language to match patterns within strings. They are commonly used for string validation, parsing, and transformation. Specify the language (PHP, Python, etc) or tool (grep, VS Code, Google Analytics, etc) that you are using. Do not post questions asking for an explanation of what a symbol means or what a particular regular expression will match."
                    
            },
            {    
                id: 11,
                tagName: "ruby",
                tagDesc: "Ruby is a multi-platform open-source, dynamic object-oriented interpreted language. The [ruby] tag is for questions related to the Ruby language, including its syntax and its libraries. Ruby on Rails questions should be tagged with [ruby-on-rails]."
                    
            },
            {    
                id: 11,
                tagName: "typescript",
                tagDesc: "TypeScript is a typed superset of JavaScript that transpiles to plain JavaScript. It adds optional types to JavaScript. This tag is for questions specific to TypeScript. It is not used for general JavaScript questions."
                    
            },
            {    
                id: 11,
                tagName: "linux",
                tagDesc: "NOTICE: All Linux questions must be related to programming; those that aren't will be closed. Use this tag only if your question relates to programming using Linux APIs or Linux-specific behavior, not just because you happen to run your code on Linux. If you need Linux support, you can try https://unix.stackexchange.com or the specific Linux distribution's Stack Exchange site like https://askubuntu.com or https://elementaryos.stackexchange.com/"
                    
            },
            {    
                id: 11,
                tagName: "ajax",
                tagDesc: "AJAX (Asynchronous JavaScript and XML) is a technique for creating interactive website user interfaces without the traditional web page refresh or reload. It uses asynchronous data exchange between client and server to update displayed information and respond to user interactions seamlessly. Include additional tags for programming languages, libraries, frameworks, web browsers, protocols and other environmental information."
                    
            },
        ]

        return (
            <div className='home-container-1'>
                <LeftSidebar />
                <div className='home-container-2'>
                    <h1 className='tags-h1'>Tags</h1>
                    <p className='tags-p'>A tag is a keyword or label that categorizes your question with other, similar questions.</p>
                    <p className='tags-p'>Using the right tags makes it easier for others to find and answer your question.</p>
                    <div className='tags-list-container'>
                        {
                            tagsList.map((tag) => (
                                <TagsList tag={tag} key={tagsList.id}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
        }

        export default Tags