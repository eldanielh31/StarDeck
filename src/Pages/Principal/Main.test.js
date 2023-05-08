import React from 'react';
import { render } from '@testing-library/react';
import Main from './Main.jsx';


describe('Pantalla Principal', () => {
    
    // Prueba de renderizado
    it('Renderiza correctamente', () => {
        const { container } = render(<Main />);
        expect(container.firstChild).toMatchSnapshot();
    });

});
