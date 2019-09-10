function bitDestroer(n, p) {
    
    let mask = 1 << p;
    mask = mask.toString(2);
    let inverted = ~ mask;


    console.log(inverted);
    
    

}
bitDestroer(1313, 5);
// bitDestroer(231, 2);
// bitDestroer(111, 6);