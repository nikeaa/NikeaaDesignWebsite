CREATE TABLE [dbo].[HomePageSection]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY, 
    [Title] NVARCHAR(50) NOT NULL, 
    [Description] NVARCHAR(MAX) NULL, 
    [Image] NVARCHAR(MAX) NOT NULL, 
    [LinkUrl] NCHAR(200) NOT NULL, 
    [IsActive] BIT NOT NULL, 
    [SortOrder] SMALLINT NOT NULL, 
    [TextAlign] NCHAR(15) NOT NULL, 
    [TextColor] NCHAR(6) NOT NULL
)
