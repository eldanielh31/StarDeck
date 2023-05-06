import React from 'react';
import CreateCard from './CreateCard.jsx';
import { render } from '@testing-library/react';

describe('Pantalla Cartas', () => {

  // Prueba de renderizado
  it('Renderiza correctamente', () => {
    const { container } = render(<CreateCard />);
    expect(container.firstChild).toMatchSnapshot();
  });

  // Prueba de propiedades
  it('Muestra el texto adecuado', () => {
    const { getByText, getAllByText } = render(<CreateCard/>);
    expect(getAllByText('Nombre:')[0]).toBeInTheDocument();
    expect(getAllByText('Imagen:')[0]).toBeInTheDocument();
    expect(getAllByText('Descripción:')[0]).toBeInTheDocument();
    expect(getAllByText('Tipo:')[0]).toBeInTheDocument();
    expect(getAllByText('Raza:')[0]).toBeInTheDocument();
    expect(getAllByText('Costo:')[0]).toBeInTheDocument();
    expect(getAllByText('Energia:')[0]).toBeInTheDocument();
    
  });

});

