import expected from "../packages/expected"
import "../packages/expected-fs"

expected(5).notEqualTo(6)
expected.file("/my/file").toExist().equalTo("hola")
expected.dir("/my/dir").toExist().notToHave("file.txt")