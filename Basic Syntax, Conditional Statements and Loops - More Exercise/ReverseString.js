function reverse(str) {
    let reversedText = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reversedText += str[i];
    }

    console.log(reversedText);
}

reverse("Hello");