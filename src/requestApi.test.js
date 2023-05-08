import { createCarta, getCartas, createPlaneta, createDeck, getDeck } from './requestApi';


describe('Cartas', () => {

    it('Se crea una carta', () => {
        const carta = { nombre: "Kai san", 
                        tipo: "ultra-rara", 
                        imagen: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAdwAAAKnCAYAAAAsrvxqAAAgAElEQVR4Xuy9B7hl2VmeuU7O4eYcK1dXd7U60FJLGok02NYgPBgzlsBjeZAtw3iw7GcAP2SDMcmPwTZgayxsGMDMwIwAEYwHBJJaoRU6V1euujmnE+/J58z7rXN21anbVd1darWfrtv7SrfPrXtP2Hvttdf3f9///f/yGGMCfHs6397Oo7nw+8l3DvaYv+bzet7l8Zgpfp/m+2W/Wq1Xeob7d3cE3BFwR8AdAXcE7p0RAP9ezVcG/Fuo1Frnri20/uLxv5v/HC8SInZ/N/VWwW6wffH3kmdGB8wPeo3nW17uU+4Eri7ovppr4z7HHQF3BNwRcEfgjT4CdwLbVwJhcPC5j/xe9R/8wL8qFTqg29SjADfEt2W2659IvT8SMj9/JzZ7EEy7/32Q3L4c8Lqg/EafZu7xuSPgjoA7Aod7BF4ONA/+rZvkvuRvL8OAlzdaP37f38h93AFdPTUisN36y/R3BwOtf3mnIb4FXDvo6oCs/ub8/cbjgTdyQfZwT1737NwRcEfAHYF7dQTuBLDO7/V44+fOSXa/5uXAe3Wz9WOnvjX3pw7DjX7mNxIT9894n7wds70T0Dogax87B9D+XfsX3b9zLoILuvfqdHSP2x0BdwTcETicI3A74LSk1YKs5xagdYDXPt4F8H7kY9Vv+/5/VdrQa6KZJ1J/whu86+BwHgRbm/3tsFkHaJvNmwDbRKW+8feu5+p9XbA9nJPVPSt3BNwRcEfgXh+Bg0zWuog7rNZLwtUBYK8XAO76mwO8r8R2ZahKvzP7XZ6FP059ezpl/u9XC7YWVHmygFYgqn/b787P7b91gPcG6Lafe8uX62i+1+eoe/zuCLgj4I7AvTkCB/KubXBts1kHUB2g1SM4a+yjwNf+3AZe59/Oa5zBuJ3E/IUXGj/q2f1U8td9Ps//fCfAvclk2y…", 
                        descripcion: "Samurai Kai San de la dinastía Chin", 
                        raza: "barbaro", 
                        costo: "99", 
                        energia: "99", 
                        estado: true, 
                        id: "C-abc8459fa6eb" }
    
        const result = createCarta(carta);
    
        expect(result).toBeDefined();
        expect(typeof result).toBe('object');
    
      });


    it('Se obtienen las cartas', () => {
        const result = getCartas();
    
        expect(result).toBeDefined();
        expect(typeof result).toBe('object');
    
      });   

});

describe('Deck', () => {

  it('Se crea un deck', () => {
      const deck = {  name: "Deck 1", 
                      cards:   ["C-abc8459fa6eb",
                                "C-cc090170de07",
                                "C-22d4083b8872", 
                                "C-abc8459fa6eb",
                                "C-cc090170de07",
                                "C-22d4083b8872",
                                "C-d1a0441514f7",
                                "C-d185f916c0c5",
                                "C-3cc6c510844a",
                                "C-124e4039434d",
                                "C-1cb16357e3d8",
                                "C-ee28a3742e55",
                                "C-041dddebca88",
                                "C-4e36638dc0da",
                                "C-3da66297ec69",
                                "C-9d880fce7c2e",
                                "C-20ffc1491e15",
                                "C-57e87b182339",
                                "C-1acf5751605c",
                                "C-b8472ece3807",
                                "C-325bb977338c"],
                      id: "",
                      id_User: 1}
  
      const result = createDeck(deck);
  
      expect(result).toBeDefined();
      expect(typeof result).toBe('object');
  
    });


  it('Se obtienen los decks', () => {
      const result = getDeck();
  
      expect(result).toBeDefined();
      expect(typeof result).toBe('object');
  
    });   

});

describe('Planetas', () => {

    it('Se crea un planeta', () => {
        const planeta = {name: "Barsun", 
                        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAdwAAAHFCAYAAABYekimAAAgAElEQVR4Xuy9CZxsWVXuuWPMOfPOVRRQEwgFQiGIDPVzYvAB0lXwBFRoJxxa32v0MTwGwX6iv6cCIqhoA2orONHajT4L2ycyjzIIFKNUFTXeunWnnIfIjIjMiP7+a+994kTcvHmHvPdmRuY+RXAyIs6wzzpxz7e/NXyr4Jyr6FUIr2JYu32/9pLvKYwO/2ChUPg+fXuVPt+j18ZL+0wbpO+TBZIFkgWSBZIF+sgCoOOZl1nXdve0V1e/tnZy6sOzv/2uT2sXEDH/anGoah5s97/+Fx5VGJ94rUD2ORue47TgmlD3zPcmbZEskCyQLJAssP0tcBq0PRMIt92XG5/8wi/M/90HFwPotliz24BexmwPvOkVL3KV8m/r7/XZ7ClYmvtgo+96rZowefv/ztIIkwWSBZIFdrIFNgTNni+73m70XbfBWjNzr5/+9XfcHEGXPYcMbN/8iv/kSuU3n9a+XSAZ3mSf6Y/83xz9XAB4J9/UdG3JAskCyQLJAtvcAt0gWsjehj9slf87977nz94Lbc3N/+r069/+z5HhDh941U8/2D3g4GfWZbanBdoIsu0cuIbP8mh7KvJuc8On4SULJAskCyQL7EoLdJBW+CqAzQGt/yr3WS8obwC8K5/8wvMX3/vB4+wyfOAtr/onHfz7TjFwL9ja+x6gBVAjqHb93UNzE/Duyt9vuuhkgWSBZIFtb4F1gRZ8BWAjs/V/rw+8OYa8jqu63W7fM/XyN/1MYd9v/NIPF4eH/ubswTYw2giucd3ywOsxuReEA1DnT5LiuNv+N5gGmCyQLJAssCMtcAooBubaC67GWvVdMQBvBOAIvLZ9NxM2e60Duqt3Hflvhf2/88p3F4rFnzg94ObdxICt3gdwNWDV3+2WErB6Prft7JVnxesA7468m+mikgWSBZIFkgW2vwV6Yr…", 
                        description: "Barsun, el planeta de los mejores guerreros!", 
                        abilities: [], 
                        type: "popular", 
                        estado: true, 
                        id: "P-5473bbe8959d"}
    
        const result = createPlaneta(planeta);
            
        expect(result).toBeDefined();
        expect(typeof result).toBe('object');
    
      });

});

