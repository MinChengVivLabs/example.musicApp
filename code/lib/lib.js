module.exports = {
  NewAlbum: NewAlbum,
  NewArtist: NewArtist,
}

// take a json format item as input, match it StructArtist
/*
structure (StructArtist) {
  description (struct of 'artist' table in db)
  property (artistID) {
    // id
    type (TypeArtistID)
    min (Required) max (One)
  }
  property (artistName) {
    // Name
    type (TypeArtistName)
    min (Required) max (One)
  }
  property (imageUrl) {
    // image url by JS assignment 
    type (TypeUrl)
    min (Required) max (One)
  }
}
*/
function NewArtist(item) {
  if (!item) 
    return {}
  var image_table = ['JD', 'QD', 'KD', 'JC', 'QC', 'KC', 'JH', 'QH', 'KH', 'JS', 'QS', 'KS']
  var rslt = 'https://github.com/MinChengVivLabs/example.musicApp/blob/master/JPEG/'
  rslt += image_table[id%image_table.length] + '.jpg?raw=true'
  return {
    artistID: item.id,
    artistName: item.Name,
    imageUrl: rslt,
  }
}

// take a json format item as input, match it StructAlbum
/*
structure (StructAlbum) {
  description (struct of 'album' table in db)
  property (albumID) {
    // id
    type (TypeAlbumID)
    min (Required) max (One)
  }
  property (albumTitle) {
    // Title
    type (TypeAlbumTitle)
    min (Required) max (One)
  }
  property (artistID) {
    // ArtistId
    type (TypeArtistID)
    min (Required) max (One)
  }
  property (imageUrl) {
    // image url by JS assignment 
    type (TypeUrl)
    min (Required) max (One)
  }
  property (artistName) {
    // by search in detail mode
    type (TypeArtistName)
    min (Optional) max (One)
    lazy-source (ActionGetArtistName)
  }
}
*/
function NewAlbum(item) {
  if (!item)
    return {}
  return {
    albumID: item.id,
    albumTitle: item.Title,
    artistID: item.ArtistId,
    imageUrl: 'https://github.com/MinChengVivLabs/example.musicApp/blob/master/JPEG/'+ item.id%10+ 'D.jpg?raw=true'
  }
}




