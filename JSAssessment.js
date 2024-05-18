/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NonFTs = []

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNonFT (_name, _age, _haircolor, _talent) {
    const NonFT = {
        "Name": _name,
        "Age": _age,
        "Haircolor": _haircolor,
        "Talent": _talent,
    }
    NonFTs.push(NonFT);
    console.log("Minted: " + _name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNonFTs () {
    for (let i = 0; i < NonFTs.length; i++){
        console.log("\nID: \t\t\t\t\t" + (i + 1));
        console.log("\nName: \t\t\t\t" + NonFTs[i].Name);
        console.log("Age: \t\t\t\t" + NonFTs[i].Age);
        console.log("Haircolor: \t\t\t" + NonFTs[i].Haircolor);
        console.log("Talent: \t\t\t\t" + NonFTs[i].Talent);
    }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal NFT: \t" + NonFTs.length);
}

// call your functions below this line
mintNonFT("Anger", "17", "Red", "Painting");
mintNonFT("Sadness", "18", "Blue", "Acting");
mintNonFT("Joy", "15", "Yellow", "Dancing");
mintNonFT("Nety", "18", "Orange", "Cooking");
mintNonFT("Evy", "18", "Green", "Singing");
listNonFTs();
getTotalSupply();
