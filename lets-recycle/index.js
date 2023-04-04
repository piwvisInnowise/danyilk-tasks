function recycle(array) {
    let bins = []
    bins[0] = array.filter((a) => a.material === "paper" || a.secondMaterial === "paper").map((a) => a.type )
    bins[1] = array.filter((a) => a.material === "glass" || a.secondMaterial === "glass").map((a) => a.type )
    bins[2] = array.filter((a) => a.material === "organic" || a.secondMaterial === "organic").map((a) => a.type )
    bins[3] = array.filter((a) => a.material === "plastic" || a.secondMaterial === "plastic").map((a) => a.type )

    return bins
}