import {logRoles, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Your tests here
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
    // Arrange
    render(<App />);

    
    // Act
    const topLevelHeading = screen.getByRole("heading", {
        name: /hi, i'm/i,
        exact: false, //partial matches will be included
        level: 1,  //we expect this to be a top-level <h1> element (not a <h2>
      });
    // Assert
    expect(topLevelHeading).toBeInTheDocument();
  });

  test("disple <h2> element",()=>{
    // Arrange
    render(<App />);

    
    // Act
    const headingTwo = screen.getByRole("heading", {
      name: /about me/i,
      level: 2,  //we expect this to be a <h2> element
    });
    // Assert
    expect(headingTwo).toBeInTheDocument();

  })


  test("displays an image alt text eddah", () => {
    // Arrange
    render(<App />);

    
    // Act
    const image = screen.getByAltText(/eddah/i);
    // Assert
    expect(image).toBeInTheDocument();
  });

  
test("displays a paragraph with the text `Lthis about me`", () => {
    // Arrange
    render(<App />);

    
    // Act
    const paragraph = screen.getByText(/lthis about me/i);
    // Assert
    expect(paragraph).toBeInTheDocument();
  });

  test("displays a github  link", () => {
    // Arrange
    render(<App />);

    
    // Act
    const githubLink = screen.getByText(/github/i);
   
    // Assert
    expect(githubLink).toBeInTheDocument();
    
  });

//   test("displays a  linkedin link", () => {
//     // Arrange
//     render(<App />);

    
//     // Act
//     const linkedinLink = screen.getByText(/linkedin/i);
//     // Assert
//     expect(linkedinLink).toBeInTheDocument();
//   });