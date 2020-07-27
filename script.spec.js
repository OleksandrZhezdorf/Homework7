describe('levels', () => {
    it('should calculate number of levels', () => {
        expect(
            levels({
                guns: {
                    pistols: 1,
                    revolvers: {
                        c: 8,
                        d: 10,
                        m: 12,
                        d: {
                            r: 14,
                            u: 16,
                        }
                    }
                },
                rifles: {
                    a: false,
                    b: 'sporting',
                },
                carbines: {
                    e: false,
                }
            })
        ).to.equal(5);
    });
});




/*Задача 2*/
describe('compare', () => {
    it('should compare 2 objects', () => {
        expect(deepEqual(obj2, obj1)).to.equal(4);
    })
})
