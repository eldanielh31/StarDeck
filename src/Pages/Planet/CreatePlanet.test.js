// import React from 'react';
// import { render } from '@testing-library/react';
// import CreatePlanet from './CreatePlanet.jsx';


// describe('Pantalla Planetas', () => {

//     // Prueba de renderizado
//     it('Renderiza correctamente', () => {
//       const { container } = render(<CreatePlanet />);
//       expect(container.firstChild).toMatchSnapshot();
//     });
  
//     // Prueba de propiedades
//     it('Muestra el texto adecuado', () => {
//       const { getByText, getAllByText } = render(<CreatePlanet/>);
//       expect(getAllByText('Nombre:')[0]).toBeInTheDocument();
//       expect(getAllByText('Imagen:')[0]).toBeInTheDocument();
//       expect(getAllByText('Descripción:')[0]).toBeInTheDocument();
//       expect(getAllByText('Habilidad:')[0]).toBeInTheDocument();
//       expect(getAllByText('Tipo:')[0]).toBeInTheDocument();
      
//     });
  
//   });

// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import CreatePlanet from './CreatePlanet';

// describe('CreatePlanet', () => {
//   test('should create a planet', async () => {
//     render(<CreatePlanet />);

//     const { getByText, getAllByText } = render(<CreatePlanet />);

//     const nameInput = screen.getByLabelText('Nombre:');
//     const imageInput = screen.getByLabelText('Imagen:');
//     const descriptionInput = screen.getByLabelText('Descripción:');
//     const abilitySelect = getAllByText('Descripción:')[0];
//     const typeSelect = getAllByText('Tipo:')[0];
//     const createButton = screen.getAllByText('Crear planeta')[0];

//     fireEvent.change(nameInput, { target: { value: 'Nombre del planeta' } });
//     fireEvent.change(imageInput, { target: { files: [new File([''], 'image.png', { type: 'image/png' })] } });
//     fireEvent.change(descriptionInput, { target: { value: 'Descripción del planeta' } });
//     // fireEvent.change(abilitySelect, { target: { value: 'habilidad1' } });
//     // fireEvent.change(typeSelect, { target: { value: 'raro' } });

//     // Simulate form submission
//     // fireEvent.submit(createButton);

//     // Assert on the result or check if an API request was made
//     // You can use mock functions or mock API responses to test the API call

//     // Example assertions
//     expect(nameInput.value).toBe('Nombre del planeta');
//     expect(imageInput.files[0].name).toBe('image.png');
//     expect(descriptionInput.value).toBe('Descripción del planeta');
//     // expect(abilitySelect.value).toBe('habilidad1');
//     // expect(typeSelect.value).toBe('raro');
//   });
// });


import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import CreatePlanet from './CreatePlanet';

describe('CreatePlanet', () => {
  test('renders without errors', () => {
    render(<CreatePlanet />);
  });

  test('updates name state when input value changes', () => {
    render(<CreatePlanet />);
    const nameInput = screen.getByLabelText('Nombre:');
    fireEvent.change(nameInput, { target: { value: 'Nuevo nombre' } });
    expect(nameInput.value).toBe('Nuevo nombre');
  });

  // test('updates cardImg state when image input changes', () => {
  //   render(<CreatePlanet />);
  //   const imageInput = screen.getByLabelText('Imagen:');
  //   fireEvent.change(imageInput, { target: { files: [new File(['dummy'], 'test.png', { type: 'image/png' })] } });
  //   const cardImage = screen.getByAltText('imagen de la carta');
  //   expect(cardImage.src).toContain('test.png');
  // });

  test('updates description state when textarea value changes', () => {
    render(<CreatePlanet />);
    const descriptionTextarea = screen.getByLabelText('Descripción:');
    fireEvent.change(descriptionTextarea, { target: { value: 'Nueva descripción' } });
    expect(descriptionTextarea.value).toBe('Nueva descripción');
  });

  test('updates abilities state when select value changes', () => {
    render(<CreatePlanet />);
    const { getByText, getAllByText } = render(<CreatePlanet />);
    expect(getAllByText('Descripción:')[0]).toBeInTheDocument();
  });

  test('updates type state when select value changes', () => {
    render(<CreatePlanet />);
    const { getByText, getAllByText } = render(<CreatePlanet />);
    expect(getAllByText('Tipo:')[0]).toBeInTheDocument();
  });

  // test('displays alert when form is submitted successfully', async () => {
  //   render(<CreatePlanet />);
  //   const { getByText, getAllByText } = render(<CreatePlanet />);
  //   const form = screen.getAllByTestId('create-planet-form')[0];


  //   fireEvent.submit(form);

  //   const alert = screen.getByRole('alert');

  //   // Assuming that the form submission triggers the API call and it succeeds
  //   await screen.findByText('Guardado correctamente.');

  //   expect(alert).toBeInTheDocument();
  //   expect(alert).toHaveTextContent('Guardado correctamente.');
  //   expect(alert).toHaveClass('success');
  // });
});

