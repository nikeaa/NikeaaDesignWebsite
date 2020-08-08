CREATE TABLE [dbo].[HomePageSections]
(
	[Id] INT NOT NULL PRIMARY KEY, 
    [Image] IMAGE NOT NULL, 
    [Order] SMALLINT NOT NULL, 
    [IsActive] BIT NOT NULL, 
    [Url] NVARCHAR(100) NOT NULL
)
